import { NextResponse } from "next/server";

const allowed = /\b(audio|sound|mix|mixing|console|ql5|ql1|yamaha|dante|waves|superrack|microphone|mic|speaker|pa|monitor|foh|gain|eq|compress|gate|reverb|delay|feedback|routing|stagebox|pro tools|ableton|logic|obs|stream|streaming|propresenter|graphics|video|lighting|dmx|av|live production|church production|network|networking|router|switch|ethernet|wifi|wi-fi|ip address|subnet|dns|dhcp|server|windows|mac|linux|computer|pc|driver|software|hardware|troubleshoot|troubleshooting|it|technology)\b/i;

function answer(q:string){
  if(!allowed.test(q)) return "I’m the Echo Productions technical assistant. I can help with live production, AV, audio, video, lighting, streaming, networking, computers, software, hardware, and IT troubleshooting. I can’t answer unrelated questions.";
  const l=q.toLowerCase();
  if(/dante/.test(l)) return "For a Dante issue, start by checking that every device is on the same intended network, the sample rate matches, Dante Controller sees the devices, and the correct clock leader is selected. Tell me your console, stagebox/interface, and what Dante Controller shows and I can walk you through it.";
  if(/ql5|ql1|yamaha/.test(l)) return "For a Yamaha QL workflow, I can walk you through patching, input channels, buses, matrices, DCA groups, scene management, monitor sends, effects, and troubleshooting. Tell me what you are trying to accomplish and I’ll give you a step-by-step procedure.";
  if(/feedback|ringing/.test(l)) return "For live feedback, lower the offending channel or monitor send first, identify the frequency, make a narrow EQ cut, then bring the level back carefully. I can help you troubleshoot whether the problem is the mic, speaker position, gain structure, or EQ.";
  if(/network|router|switch|wifi|wi-fi|ethernet|subnet|dns|dhcp/.test(l)) return "For networking, I can help with IP addressing, DHCP, static IPs, VLANs, switches, Wi-Fi, Dante networks, and troubleshooting. Give me the devices involved and their IP/network details.";
  if(/obs|stream/.test(l)) return "For OBS and streaming, I can help with scenes, sources, audio routing, capture devices, encoders, bitrate, dropped frames, and stream troubleshooting.";
  return "Yes—I can help with that. Give me the equipment/software you’re using, what you want to accomplish, and what is currently happening. I’ll break it down step by step.";
}

export async function POST(req:Request){
  try{
    const body=await req.json();
    const q=typeof body?.message==="string"?body.message.trim():"";
    if(!q) return NextResponse.json({error:"Enter a question."},{status:400});
    return NextResponse.json({answer:answer(q),scope:"production-it"});
  }catch{return NextResponse.json({error:"Invalid request."},{status:400});}
}