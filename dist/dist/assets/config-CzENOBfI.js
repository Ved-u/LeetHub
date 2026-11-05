import{L as h}from"./config-CbKA4DeF.js";const d={frontendId:"questionFrontendId",title:"title",titleSlug:"titleSlug",difficulty:"difficulty",tags:"topicTags[].name",paidOnly:"isPaidOnly",status:"status"},g=`query leetstashSolvedProblems($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {
  questionList(categorySlug: $categorySlug, limit: $limit, skip: $skip, filters: $filters) {
    totalNum
    data { questionFrontendId title titleSlug difficulty isPaidOnly status topicTags { name } }
  }
}`,f={id:"id",titleSlug:"titleSlug",title:"title",lang:"lang",timestamp:"timestamp",status:"status",statusDisplay:"statusDisplay",isPending:"isPending",runtime:"runtime",memory:"memory"},c={code:"code",lang:"lang.name",timestamp:"timestamp",statusCode:"statusCode",runtimeDisplay:"runtimeDisplay",memoryDisplay:"memoryDisplay",runtimePercentile:"runtimePercentile",frontendId:"question.questionFrontendId",title:"question.title",titleSlug:"question.titleSlug",difficulty:"question.difficulty",tags:"question.topicTags[].name"},q={currentUser:[{id:"gql-userStatus",kind:"graphql",query:"query leetstashUser { userStatus { isSignedIn username } }",variables:{},root:"data.userStatus",fields:{isSignedIn:"isSignedIn",username:"username"}}],solvedProblems:[{id:"gql-questionList-ac",kind:"graphql",query:g,variables:{categorySlug:"",limit:"$limit",skip:"$skip",filters:{status:"AC"}},root:"data.questionList.data",fields:d,paging:"skip",pageSize:100,totalPath:"data.questionList.totalNum"},{id:"gql-userProgressQuestionList",kind:"graphql",query:`query leetstashProgress($filters: UserProgressQuestionListInput) {
  userProgressQuestionList(filters: $filters) {
    totalNum
    questions { frontendId title titleSlug difficulty lastSubmittedAt questionStatus topicTags { name } }
  }
}`,variables:{filters:{skip:"$skip",limit:"$limit",questionStatus:"SOLVED"}},root:"data.userProgressQuestionList.questions",fields:{frontendId:"frontendId",title:"title",titleSlug:"titleSlug",difficulty:"difficulty",tags:"topicTags[].name",status:"questionStatus",lastSubmittedAt:"lastSubmittedAt"},paging:"skip",pageSize:100,totalPath:"data.userProgressQuestionList.totalNum",serverFiltersSolved:!0},{id:"gql-questionList-all",kind:"graphql",query:g,variables:{categorySlug:"",limit:"$limit",skip:"$skip",filters:{}},root:"data.questionList.data",fields:d,paging:"skip",pageSize:100,totalPath:"data.questionList.totalNum"},{id:"rest-problems-all",kind:"rest",path:"/api/problems/all/",root:"stat_status_pairs",fields:{frontendId:"stat.frontend_question_id",title:"stat.question__title",titleSlug:"stat.question__title_slug",difficulty:"difficulty.level",paidOnly:"paid_only",status:"status"},paging:"none"}],allSubmissions:[{id:"rest-api-submissions",kind:"rest",path:"/api/submissions/?offset={offset}&limit={limit}&lastkey={lastKey}",root:"submissions_dump",fields:{id:"id",titleSlug:"title_slug",title:"title",lang:"lang",timestamp:"timestamp",status:"status",statusDisplay:"status_display",runtime:"runtime",memory:"memory",code:"code"},paging:"lastKey",pageSize:20,hasNextPath:"has_next",nextKeyPath:"last_key"},{id:"gql-submissionList",kind:"graphql",query:`query leetstashAllSubmissions($offset: Int!, $limit: Int!, $lastKey: String) {
  submissionList(offset: $offset, limit: $limit, lastKey: $lastKey) {
    lastKey
    hasNext
    submissions { id lang timestamp statusDisplay isPending runtime memory title titleSlug }
  }
}`,variables:{offset:"$offset",limit:"$limit",lastKey:"$lastKey"},root:"data.submissionList.submissions",fields:f,paging:"lastKey",pageSize:20,hasNextPath:"data.submissionList.hasNext",nextKeyPath:"data.submissionList.lastKey"}],problemSubmissions:[{id:"gql-questionSubmissionList-full",kind:"graphql",query:`query leetstashProblemSubmissions($offset: Int!, $limit: Int!, $lastKey: String, $questionSlug: String!) {
  questionSubmissionList(offset: $offset, limit: $limit, lastKey: $lastKey, questionSlug: $questionSlug) {
    lastKey
    hasNext
    submissions { id statusDisplay status isPending timestamp lang runtime memory title titleSlug }
  }
}`,variables:{offset:"$offset",limit:"$limit",lastKey:"$lastKey",questionSlug:"$slug"},root:"data.questionSubmissionList.submissions",fields:f,paging:"lastKey",pageSize:20,hasNextPath:"data.questionSubmissionList.hasNext",nextKeyPath:"data.questionSubmissionList.lastKey"},{id:"gql-questionSubmissionList-min",kind:"graphql",query:`query submissionList($offset: Int!, $limit: Int!, $lastKey: String, $questionSlug: String!) {
  questionSubmissionList(offset: $offset, limit: $limit, lastKey: $lastKey, questionSlug: $questionSlug) {
    submissions {
      id
      statusDisplay
      status
      isPending
      timestamp
    }
  }
}`,variables:{offset:"$offset",limit:"$limit",lastKey:"$lastKey",questionSlug:"$slug"},root:"data.questionSubmissionList.submissions",fields:{id:"id",statusDisplay:"statusDisplay",status:"status",isPending:"isPending",timestamp:"timestamp"},paging:"offset",pageSize:20}],submissionDetail:[{id:"gql-submissionDetails-full",kind:"graphql",query:`query submissionDetails($submissionId: Int!) {
  submissionDetails(submissionId: $submissionId) {
    code
    timestamp
    statusCode
    runtimeDisplay
    memoryDisplay
    runtimePercentile
    lang { name }
    question { questionFrontendId title titleSlug difficulty topicTags { name } }
  }
}`,variables:{submissionId:"$idNumber"},root:"data.submissionDetails",fields:c},{id:"gql-submissionDetails-min",kind:"graphql",query:`query submissionDetails($submissionId: Int!) {
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
}`,variables:{submissionId:"$idNumber"},root:"data.submissionDetails",fields:c}],contestInfo:[{id:"rest-contest-info",kind:"rest",path:"/contest/api/info/{slug}/",root:"contest",fields:{startTime:"start_time",duration:"duration"}}]},k={offset:0,lastKey:null},p={currentUser:["isSignedIn","username"],solvedProblems:["frontendId","title","titleSlug","difficulty","tags","paidOnly","status","lastSubmittedAt"],allSubmissions:["id","titleSlug","title","lang","timestamp","status","statusDisplay","isPending","runtime","memory","code"],problemSubmissions:["id","titleSlug","title","lang","timestamp","status","statusDisplay","isPending","runtime","memory","code"],submissionDetail:["code","lang","timestamp","statusCode","runtimeDisplay","memoryDisplay","runtimePercentile","frontendId","title","titleSlug","difficulty","tags"],contestInfo:["startTime","duration"]};class $ extends Error{constructor(i,e,t=null){super(i),this.status=e,this.retryAfterMs=t,this.name="LcHttpError"}}class v extends ${constructor(i,e,t=null){super(i,e,t),this.name="LcRateLimitError"}}class D extends Error{constructor(i="You're not signed in to LeetCode in this browser."){super(i),this.name="LcAuthError"}}class _ extends Error{constructor(i){super(i),this.name="LcNotFoundError"}}class K extends Error{constructor(i){super(i),this.name="LcNetworkError"}}class N extends Error{constructor(i,e,t=[]){super(i),this.operation=e,this.attempts=t,this.name="LcSchemaError"}}const m="leetstash_lc_query_config",S=Object.keys(p),y=/^[a-z0-9][a-z0-9._-]{0,63}$/,u=2e4;function a(s,i){throw new Error(`Invalid LeetCode query config at ${s}: ${i}`)}function l(s,i){s!==void 0&&typeof s!="string"&&a(i,"must be a string")}function L(s,i,e){(!s||typeof s!="object"||Array.isArray(s))&&a(e,"must be an object");const t=s;(typeof t.id!="string"||!y.test(t.id))&&a(e,"id must match "+y),t.kind!=="graphql"&&t.kind!=="rest"&&a(e,'kind must be "graphql" or "rest"'),t.kind==="graphql"&&(typeof t.query!="string"||!t.query.trim()||t.query.length>u)&&a(e,"graphql strategies need a query string"),t.kind==="rest"&&((typeof t.path!="string"||!t.path.startsWith("/")||t.path.startsWith("//")||t.path.length>u)&&a(e,'rest strategies need a path starting with a single "/"'),t.method!==void 0&&t.method!=="GET"&&t.method!=="POST"&&a(e,'method must be "GET" or "POST"')),typeof t.root!="string"&&a(e,"root must be a string"),(!t.fields||typeof t.fields!="object"||Array.isArray(t.fields))&&a(e,"fields must be an object");const o=t.fields;Object.keys(o).length>40&&a(e,"too many fields");for(const[n,r]of Object.entries(o))p[i].includes(n)||a(`${e}.fields.${n}`,`unknown field for ${i}`),(typeof r!="string"||r.length>500)&&a(`${e}.fields.${n}`,"must be a path string");return t.paging!==void 0&&!["none","offset","skip","lastKey"].includes(t.paging)&&a(e,"paging must be none, offset, skip or lastKey"),t.pageSize!==void 0&&!(Number.isInteger(t.pageSize)&&t.pageSize>0&&t.pageSize<=1e3)&&a(e,"pageSize must be an integer from 1 to 1000"),l(t.hasNextPath,e+".hasNextPath"),l(t.nextKeyPath,e+".nextKeyPath"),l(t.totalPath,e+".totalPath"),t.serverFiltersSolved!==void 0&&typeof t.serverFiltersSolved!="boolean"&&a(e,"serverFiltersSolved must be a boolean"),t.variables!==void 0&&JSON.stringify(t.variables).length>u&&a(e,"variables too large"),{id:t.id,kind:t.kind,query:t.query,variables:t.variables,path:t.path,method:t.method,root:t.root,fields:o,paging:t.paging,pageSize:t.pageSize,hasNextPath:t.hasNextPath,nextKeyPath:t.nextKeyPath,totalPath:t.totalPath,serverFiltersSolved:t.serverFiltersSolved}}function b(s){(!s||typeof s!="object"||Array.isArray(s))&&a("root","must be an object");const i=s;i.version!==1&&a("version","must be 1"),l(i.note,"note"),(!i.strategies||typeof i.strategies!="object"||Array.isArray(i.strategies))&&a("strategies","must be an object");const e={};for(const[t,o]of Object.entries(i.strategies))S.includes(t)||a(`strategies.${t}`,"unknown operation"),(!Array.isArray(o)||o.length>20)&&a(`strategies.${t}`,"must be an array of at most 20 strategies"),e[t]=o.map((n,r)=>L(n,t,`strategies.${t}[${r}]`));return{version:1,note:i.note,strategies:e}}function I(s){const i={};for(const e of S){const t=(s==null?void 0:s.strategies[e])??[],o=new Set(t.map(n=>n.id));i[e]=[...t,...q[e].filter(n=>!o.has(n.id))]}return i}async function E(){try{const s=(await chrome.storage.local.get(m))[m];return s?{...s,config:b(s.config)}:null}catch{return null}}async function T(s=h){if(!s)return{ok:!0,changed:!1};const i=new AbortController,e=setTimeout(()=>i.abort(),15e3);try{const t=await fetch(s,{cache:"no-cache",signal:i.signal});if(!t.ok)return{ok:!1,changed:!1,error:`Query config request failed (status ${t.status})`};const o=b(await t.json()),n=await E(),r=JSON.stringify(n==null?void 0:n.config)!==JSON.stringify(o);return await chrome.storage.local.set({[m]:{config:o,url:s,fetchedAt:Date.now()}}),{ok:!0,changed:r}}catch(t){return{ok:!1,changed:!1,error:t instanceof Error?t.message:String(t)}}finally{clearTimeout(e)}}function A(s){const i={version:1,note:"Effective LeetStash query strategies. Edit, then host this file and set VITE_LEETCODE_QUERIES_URL.",strategies:I(s)};return JSON.stringify(i,null,2)}export{k as F,D as L,N as a,p as b,v as c,$ as d,_ as e,K as f,E as g,A as h,I as m,T as r};
