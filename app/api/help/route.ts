import {NextResponse} from "next/server";

const allowed=/\b(audio|sound|mix|mixing|console|ql5|ql1|yamaha|dante|waves|superrack|microphone|mic|speaker|pa|monitor|foh|gain|eq|compress|gate|reverb|delay|feedback|routing|stagebox|video|propresenter|graphics|ndi|capture|camera|display|screen|obs|stream|streaming|encoder|lighting|dmx|fixture|cues|universe|network|networking|router|switch|ethernet|wifi|wi-fi|ip address|subnet|dns|dhcp|server|windows|mac|linux|computer|pc|driver|software|hardware|troubleshoot|troubleshooting|it|technology|coding|code|programming|javascript|typescript|python|html|css|react|next\.js|api|github|git|database)\b/i;

const system=`You are Echo Tech, the technical assistant for Echo Productions.

SCOPE: You ONLY answer questions about live production, AV, audio, video, lighting, streaming, broadcast, networking, computers, IT, software, hardware, troubleshooting, and programming/coding. If a question is outside those areas, politely say you are limited to Echo Productions production and IT support.

STYLE:
- Be practical, clear, and conversational.
- Give numbered steps for setup/troubleshooting.
- Ask for the exact equipment/model, software version, symptoms, and relevant signal/network path when needed.
- Never invent a button, menu, connector, specification, or manufacturer procedure. If uncertain, say so.
- For safety-sensitive electrical, rigging, power, or equipment procedures, recommend following the manufacturer's manual and qualified site procedures.
- Do not claim to have accessed a device, network, manual, account, or website unless the user supplied that information.
- Prefer diagnosing the user's actual setup over generic advice.
- You are an assistant, not a replacement for a qualified technician.`;

function clearlyOutOfScope(q:string){
 const lower=q.toLowerCase();
 const unrelated=/\\b(pizza|recipe|dating|relationship|love advice|celebrity gossip|sports scores|politics|weather forecast|homework|math problem|movie review|song lyrics|vacation itinerary)\\b/i;
 return unrelated.test(lower)&&!allowed.test(lower);
}

export async function POST(req:Request){
 try{
  const body=await req.json();const q=typeof body?.message==="string"?body.message.trim():"";
  if(!q)return NextResponse.json({error:"Enter a question."},{status:400});
  if(clearlyOutOfScope(q))return NextResponse.json({answer:"I’m Echo Tech, the Echo Productions technical assistant. I’m limited to production and IT topics—audio, video, lighting, streaming, networking, computers, software, hardware, troubleshooting, and programming."});
  const key=process.env.GROQ_API_KEY;
  if(!key)return NextResponse.json({error:"Echo Tech AI is not configured yet. Add GROQ_API_KEY in the deployment environment."},{status:503});
  const model=process.env.GROQ_MODEL||"openai/gpt-oss-120b";
  const r=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{"Authorization":`Bearer ${key.trim()}`,"Content-Type":"application/json"},body:JSON.stringify({model,temperature:.2,max_tokens:900,messages:[{role:"system",content:system},{role:"user",content:q}]})});
  const data=await r.json().catch(()=>({}));
  if(!r.ok){
    const providerMessage=typeof data?.error?.message==="string"?data.error.message:"Groq returned an unknown error.";
    console.error("Echo Tech Groq error",{status:r.status,model,providerMessage});
    return NextResponse.json({error:`Echo Tech AI service error: ${providerMessage}`},{status:502});
  }
  const answer=data?.choices?.[0]?.message?.content;
  if(typeof answer!=="string"||!answer.trim())return NextResponse.json({error:"The AI returned an empty response."},{status:502});
  return NextResponse.json({answer:answer.trim(),topics:["production","it"]});
 }catch{return NextResponse.json({error:"Unable to process the Echo Tech request."},{status:500})}
}