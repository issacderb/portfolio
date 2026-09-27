import React, { useEffect, useState } from 'react';

export const LivingMonitor: React.FC = () => {
  const [timecode, setTimecode] = useState('00:01:24:18');

  useEffect(() => {
    let frame = 18;
    let sec = 24;
    const interval = setInterval(() => {
      frame += 1;
      if (frame >= 25) {
        frame = 0;
        sec += 1;
        if (sec >= 60) sec = 0;
      }
      const pad = (n: number) => n.toString().padStart(2, '0');
      setTimecode(`00:01:${pad(sec)}:${pad(frame)}`);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full bg-[#121214] rounded-[2px] overflow-hidden flex flex-col justify-between p-1 select-none shadow-[0_0_25px_rgba(255,180,110,0.22)] border border-[#222]">
      {/* Top Bar: DaVinci Resolve / Premiere Header */}
      <div className="flex items-center justify-between px-1.5 py-0.5 border-b border-white/10 bg-[#1A1A1E] text-[7px] font-mono text-[#8E8E93]">
        <div className="flex items-center space-x-1">
          <span className="w-1 h-1 rounded-full bg-[#E07A5F]" />
          <span className="text-white/80 font-semibold tracking-wider">DAVINCI RESOLVE</span>
          <span className="text-white/40">· Project_Final_v3</span>
        </div>
        <div className="flex items-center space-x-1 text-emerald-400 font-mono">
          <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
          <span>{timecode}</span>
        </div>
      </div>

      {/* Center: Live Video Footage Preview */}
      <div className="relative flex-1 bg-black overflow-hidden my-0.5 rounded-[1px] flex items-center justify-center">
        {/* Real looping creator video */}
        <video
          src="/assets/videos/talking-head.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90 contrast-105"
        />

        {/* Cinematic Preview Overlay Details */}
        <div className="absolute top-1 left-1.5 px-1 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[6px] font-mono text-white/90">
          REC · 4K 24fps · ProRes 422
        </div>

        <div className="absolute bottom-1 right-1.5 flex items-center space-x-1 px-1 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[6px] font-mono text-white/80">
          <span>LUT: Golden_Film_Grade</span>
        </div>

        {/* Center Crosshair Rule of Thirds */}
        <div className="absolute inset-0 pointer-events-none opacity-20 grid grid-cols-3 grid-rows-3">
          <div className="border-r border-b border-white" />
          <div className="border-r border-b border-white" />
          <div className="border-b border-white" />
          <div className="border-r border-b border-white" />
          <div className="border-r border-b border-white" />
          <div className="border-b border-white" />
          <div className="border-r border-white" />
          <div className="border-r border-white" />
          <div />
        </div>
      </div>

      {/* Bottom: Multi-Track Timeline with Moving Playhead */}
      <div className="relative h-[38%] bg-[#18181C] border-t border-white/10 px-1 py-0.5 flex flex-col justify-between overflow-hidden">
        {/* Track V2 */}
        <div className="relative h-2 w-full bg-[#202026] rounded-[1px] overflow-hidden flex items-center mb-0.5">
          <span className="text-[5px] font-mono text-white/40 pl-0.5 pr-1 shrink-0">V2</span>
          <div className="flex-1 h-full flex items-center space-x-0.5">
            <div className="w-[30%] h-full bg-[#A855F7]/80 rounded-[1px] border border-[#C084FC]/60" />
            <div className="w-[45%] h-full bg-[#EC4899]/80 rounded-[1px] border border-[#F472B6]/60" />
          </div>
        </div>

        {/* Track V1 */}
        <div className="relative h-2 w-full bg-[#202026] rounded-[1px] overflow-hidden flex items-center mb-0.5">
          <span className="text-[5px] font-mono text-white/40 pl-0.5 pr-1 shrink-0">V1</span>
          <div className="flex-1 h-full flex items-center space-x-0.5">
            <div className="w-[20%] h-full bg-[#3B82F6]/80 rounded-[1px] border border-[#60A5FA]/60" />
            <div className="w-[35%] h-full bg-[#06B6D4]/80 rounded-[1px] border border-[#22D3EE]/60" />
            <div className="w-[40%] h-full bg-[#3B82F6]/80 rounded-[1px] border border-[#60A5FA]/60" />
          </div>
        </div>

        {/* Track A1 (Audio Waveforms) */}
        <div className="relative h-2 w-full bg-[#202026] rounded-[1px] overflow-hidden flex items-center">
          <span className="text-[5px] font-mono text-white/40 pl-0.5 pr-1 shrink-0">A1</span>
          <div className="flex-1 h-full flex items-center space-x-0.5">
            <div className="w-[50%] h-full bg-[#10B981]/70 rounded-[1px] border border-[#34D399]/60 flex items-center justify-around px-0.5">
              <span className="w-[1px] h-1 bg-white/40" />
              <span className="w-[1px] h-1.5 bg-white/60" />
              <span className="w-[1px] h-1 bg-white/40" />
              <span className="w-[1px] h-1.5 bg-white/60" />
            </div>
            <div className="w-[45%] h-full bg-[#10B981]/70 rounded-[1px] border border-[#34D399]/60 flex items-center justify-around px-0.5">
              <span className="w-[1px] h-1 bg-white/40" />
              <span className="w-[1px] h-1.5 bg-white/60" />
              <span className="w-[1px] h-1 bg-white/40" />
            </div>
          </div>
        </div>

        {/* Gliding Red Playhead Needle */}
        <div className="absolute inset-y-0 left-0 right-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 bottom-0 w-[1.5px] bg-red-500 shadow-[0_0_4px_rgba(239,68,68,0.8)]"
            style={{
              animation: 'timeline-play 4s linear infinite'
            }}
          >
            <div className="w-1.5 h-1 -ml-[2px] bg-red-500 clip-playhead" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes timeline-play {
          0% { left: 8%; }
          100% { left: 95%; }
        }
      `}</style>
    </div>
  );
};
