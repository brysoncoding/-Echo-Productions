import { NextResponse } from "next/server";

const topics = {
 audio:/\b(audio|sound|mix|mixing|console|ql5|ql1|yamaha|dante|waves|superrack|microphone|mic|speaker|pa|monitor|foh|gain|eq|compress|gate|reverb|delay|feedback|routing|stagebox)\b/i,
 video:/\b(video|propresenter|graphics|ndi|capture|camera|display|screen|obs|stream|streaming|encoder)\b/i,
 lighting:/\b(lighting|dmx|fixture|console|programming|cues|universe)\b/i,
 it:/\b(network|networking|router|switch|ethernet|wifi|wi-fi|ip address|subnet|dns|dhcp|server|windows|mac|linux|computer|pc|driver|software|hardware|troubleshoot|troubleshooting|it|technology)\b/i
};

function detect(q:string){return Object.entries(topics).filter(([,rx])=>rx.test(q)).map(([name])=>name)}

function answer(q:string){
 const matched=detect(q);
 if(!matched.length) return "I’m the Echo Productions technical assistant. I can help with production and IT topics only—audio, video, lighting, streaming, networking, computers, software, hardware, and troubleshooting.";
 const l=q.toLowerCase();
 if(/dante/.test(l)) return "Dante troubleshooting: 1) confirm the devices are on the intended network, 2) check sample rates, 3) open Dante Controller and confirm both devices appear, 4) check clock status, 5) verify subscriptions/routing. If you tell me the console, stagebox/interface, network setup, and exact symptom, I can narrow it down.";
 if(/feedback|ringing/.test(l)) return "Start safely: reduce the affected channel or monitor send, identify which speaker/mic path is involved, then check mic placement, gain structure, and EQ. A narrow cut can address a known ringing frequency, but avoid blindly boosting or cutting large amounts. Tell me whether it is FOH or monitors and what console you use.";
 if(/ql5|ql1|yamaha/.test(l)) return "I can walk you through Yamaha QL workflows step by step, including patching, input channels, buses, matrices, DCAs, scenes, monitors, effects, and troubleshooting. Tell me the exact result you want and the equipment connected to the console.";
 if(/obs|stream/.test(l)) return "For OBS, I can help with scenes, sources, audio routing, capture devices, encoder settings, bitrate, dropped frames, and troubleshooting. Tell me your computer, capture/streaming hardware, and what is going wrong.";
 if(/network|router|switch|wifi|wi-fi|ethernet|subnet|dns|dhcp/.test(l)) return "For a production network, I can help map the devices, IP addressing, DHCP/static addressing, switches, Wi-Fi, VLANs, and Dante requirements. Give me the devices and current network details and I’ll work through it with you.";
 return "Yes—this is within Echo Tech’s scope. Tell me the equipment or software, what you want to accomplish, and what is happening now. I’ll break the troubleshooting or setup into clear steps.";
}

export async function POST(req:Request){
 try{
  const body=await req.json(); const q=typeof body?.message==="string"?body.message.trim():"";
  if(!q)return NextResponse.json({error:"Enter a question."},{status:400});
  return NextResponse.json({answer:answer(q),topics:detect(q)});
 }catch{return NextResponse.json({error:"Invalid request."},{status:400});}
}