(function(){const t="[LeetHub Sync/content]";console.log(t,"content script loaded on",window.location.href);const y="https://leetcode.com/graphql",b=`query submissionList($offset: Int!, $limit: Int!, $lastKey: String, $questionSlug: String!) {
  questionSubmissionList(offset: $offset, limit: $limit, lastKey: $lastKey, questionSlug: $questionSlug) {
    submissions {
      id
      statusDisplay
      status
      isPending
      timestamp
    }
  }
}`,h=`query submissionDetails($submissionId: Int!) {
  submissionDetails(submissionId: $submissionId) {
    code
    runtimeDisplay
    memoryDisplay
    runtimePercentile
    lang { name }
    question {
      questionFrontendId
      title
      titleSlug
      difficulty
      topicTags { name }
    }
  }
}`;async function f(e,l){var a,u;console.log(t,"GraphQL request",{variables:l});const n=await fetch(y,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e,variables:l})});if(console.log(t,"GraphQL response status:",n.status),!n.ok)throw new Error(`LeetCode GraphQL request failed: ${n.status}`);const s=await n.json();if(console.log(t,"GraphQL response body:",s),(a=s.errors)!=null&&a.length)throw new Error(((u=s.errors[0])==null?void 0:u.message)??"LeetCode GraphQL error");return s.data}function I(e){return new Promise(l=>setTimeout(l,e))}async function T(e){var s,a,u;console.log(t,"starting poll for slug:",e);for(let d=0;d<15;d++){console.log(t,`poll attempt ${d+1}/15`);const m=await f(b,{offset:0,limit:1,lastKey:null,questionSlug:e}),o=(a=(s=m==null?void 0:m.questionSubmissionList)==null?void 0:s.submissions)==null?void 0:a[0];if(console.log(t,"latest submission:",o),!o){console.warn(t,"no submissions returned for this question, stopping poll");return}if(o.isPending===!0||o.isPending==="Pending"||!o.statusDisplay){console.log(t,"still pending, waiting",2e3,"ms"),await I(2e3);continue}if(o.statusDisplay!=="Accepted"&&o.status!==10){console.log(t,"submission resolved but not Accepted:",o.statusDisplay);return}console.log(t,"Accepted! fetching submission details for id:",o.id);const g=await f(h,{submissionId:Number(o.id)}),i=g==null?void 0:g.submissionDetails;if(!i){console.warn(t,"submissionDetails returned empty, aborting");return}const r=i.question,p=(r.topicTags??[]).map(c=>c.name),S={code:i.code,language:((u=i.lang)==null?void 0:u.name)??"text",submittedAt:Date.now(),metadata:{frontendId:String(r.questionFrontendId).padStart(4,"0"),title:r.title,titleSlug:r.titleSlug,difficulty:r.difficulty,topic:p[0]??"Uncategorized",link:`https://leetcode.com/problems/${r.titleSlug}/`,tags:p},runtimeDisplay:i.runtimeDisplay??null,memoryDisplay:i.memoryDisplay??null,runtimePercentile:typeof i.runtimePercentile=="number"?i.runtimePercentile:null};console.log(t,"sending ACCEPTED_SUBMISSION to background:",S),chrome.runtime.sendMessage({type:"ACCEPTED_SUBMISSION",payload:S}).then(c=>console.log(t,"background acked ACCEPTED_SUBMISSION:",c)).catch(c=>console.error(t,"failed to send ACCEPTED_SUBMISSION to background:",c));return}console.warn(t,"gave up polling after",15,"attempts without a resolved verdict")}chrome.runtime.onMessage.addListener((e,l,n)=>(console.log(t,"received runtime message:",e),e.type==="CHECK_SUBMISSION"?(T(e.payload.questionSlug).then(()=>n({ok:!0})).catch(s=>{console.error(t,"failed to poll submission result:",s),n({ok:!1,error:String(s)})}),!0):!1));
})()
