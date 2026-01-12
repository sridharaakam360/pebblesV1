import React from 'react';
import './StickmanStory.css';

const StickmanStory: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none overflow-visible z-20" style={{ background: 'transparent' }}>

      {/* Scene 1: Coffee Meeting (Always Visible on Left) */}
      <div className="absolute bottom-0 left-[5vw] z-30">
        {/* Coffee Shop Sign */}
        <div className="absolute bottom-20 left-8 flex flex-col items-center">
          <div className="bg-slate-800 text-white px-2 py-0.5 rounded-t-sm text-[8px] font-bold tracking-widest uppercase">Coffee Shop</div>
          <div className="w-0.5 h-4 bg-slate-400"></div>
        </div>

        {/* Table - centered between figures */}
        <div className="absolute bottom-9 left-6 w-20 h-2 border-t-4 border-slate-300 bg-white/60 rounded-sm">
          {/* Hourglass (Sandclock) on table */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <svg width="16" height="24" viewBox="0 0 20 28" className="drop-shadow-sm">
              {/* Frame */}
              <path d="M3 2 L17 2 M3 26 L17 26 M5 2 C5 2, 3 10, 10 14 C17 10, 15 2, 15 2 M5 26 C5 26, 3 18, 10 14 C17 18, 15 26, 15 26" stroke="#475569" strokeWidth="1.5" fill="none" />
              {/* Top Sand */}
              <path d="M6 4 Q10 12 14 4 Z" fill="#fbbf24" className="anim-sand-top" />
              {/* Bottom Sand */}
              <path d="M10 14 Q14 24 6 24 L14 24 Q6 24 10 14" fill="#fbbf24" className="anim-sand-bottom" />
              {/* Falling Stream */}
              <line x1="10" y1="13" x2="10" y2="22" stroke="#fbbf24" strokeWidth="1" strokeDasharray="1,1" className="anim-sand-stream" />
            </svg>
          </div>

          {/* Delivered App - appears when van reaches coffee shop, positioned to cover the clock */}
          <div className="anim-app-table absolute -top-8 left-1/4 -translate-x-1/2 w-10 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg border-2 border-white shadow-lg flex items-center justify-center text-white text-[8px] font-bold flex-col opacity-0">
            <div className="w-6 h-0.5 bg-white/40 mb-0.5 rounded-full"></div>
            <div className="flex items-center">
              <span className="text-[8px]">🚀</span>
              <span className="ml-0.5">APP</span>
            </div>
          </div>
        </div>

        <div className="flex gap-12 relative">
          {/* Client */}
          <div className="relative">
            <svg width="40" height="70" viewBox="0 0 40 70">
              <circle cx="20" cy="10" r="6" stroke="#64748b" fill="#f1f5f9" strokeWidth="2" />
              <line x1="20" y1="16" x2="20" y2="45" stroke="#64748b" strokeWidth="2" />
              {/* Sitting Legs */}
              <path d="M20 45 L35 45 L35 65" stroke="#64748b" strokeWidth="2" fill="none" />
              {/* Arm holding Cup */}
              <g className="anim-arm-sip">
                <line x1="20" y1="20" x2="32" y2="22" stroke="#64748b" strokeWidth="2" />
                <rect x="30" y="18" width="6" height="8" fill="#cbd5e1" rx="1" /> {/* Cup */}
              </g>
            </svg>
            <div className="absolute -top-4 -left-2 bg-white px-1 rounded shadow text-[9px] text-slate-500">Client</div>
          </div>

          {/* Rep */}
          <div className="relative">
            <svg width="40" height="70" viewBox="0 0 40 70">
              <circle cx="20" cy="10" r="6" stroke="#0891b2" fill="#e0f2fe" strokeWidth="2" />
              <line x1="20" y1="16" x2="20" y2="45" stroke="#0891b2" strokeWidth="2" />
              {/* Sitting Legs */}
              <path d="M20 45 L5 45 L5 65" stroke="#0891b2" strokeWidth="2" fill="none" />
              {/* Arm holding Cup */}
              <g className="anim-arm-sip" style={{ animationDelay: '1s' }}>
                <line x1="20" y1="20" x2="8" y2="22" stroke="#0891b2" strokeWidth="2" />
                <rect x="4" y="18" width="6" height="8" fill="#0891b2" rx="1" /> {/* Cup */}
              </g>
            </svg>
            <div className="absolute -top-4 -right-2 bg-white px-1 rounded shadow text-[9px] text-accent-600">Rep</div>
          </div>
        </div>
      </div>

      {/* Scene 2: Paper Rocket Flying (Rep -> Plan) */}
      <div className="anim-rocket absolute bottom-10 left-[15vw] z-40 opacity-0">
        <svg width="40" height="40" viewBox="0 0 60 60" className="drop-shadow-lg">
          {/* Main paper airplane body - flipped so sharp end faces right */}
          <g transform="translate(60, 0) scale(-1, 1) rotate(25 30 30)">
            {/* Main triangle */}
            <path
              d="M 10 30 L 50 10 L 50 50 L 10 30 Z"
              fill="none"
              stroke="#1e293b"
              strokeWidth="2.5"
              strokeLinejoin="miter"
            />

            {/* Center fold line */}
            <line
              x1="10"
              y1="30"
              x2="50"
              y2="30"
              stroke="#1e293b"
              strokeWidth="2.5"
            />

            {/* Top wing fold */}
            <line
              x1="30"
              y1="20"
              x2="50"
              y2="10"
              stroke="#1e293b"
              strokeWidth="2"
            />

            {/* Bottom wing fold */}
            <line
              x1="30"
              y1="40"
              x2="50"
              y2="50"
              stroke="#1e293b"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>

      {/* Scene 3: Planning Team (Center) - Appears after rocket arrives */}
      <div className="anim-plan absolute bottom-0 left-[38vw] z-20 opacity-0">
        <div className="flex gap-4 items-end">
          {/* Planner with receiving animation */}
          <div className="relative">
            <svg width="30" height="60" viewBox="0 0 40 60">
              <circle cx="20" cy="10" r="5" stroke="#475569" strokeWidth="2" fill="#fbbf24" />
              <line x1="20" y1="15" x2="20" y2="40" stroke="#475569" strokeWidth="2" />
              <line x1="20" y1="40" x2="15" y2="60" stroke="#475569" strokeWidth="2" />
              <line x1="20" y1="40" x2="25" y2="60" stroke="#475569" strokeWidth="2" />
              {/* Receiving arm - animated when rocket arrives */}
              <line x1="20" y1="25" x2="10" y2="15" stroke="#475569" strokeWidth="2" className="anim-receiving-arm" />
              <line x1="20" y1="25" x2="30" y2="20" stroke="#475569" strokeWidth="2" />
            </svg>
            <div className="absolute -top-4 left-0 bg-white px-1 rounded shadow text-[9px] text-slate-700">Planner</div>
          </div>
          {/* Whiteboard with project ideas */}
          <div className="mb-10 bg-white border-2 border-slate-300 p-1 rounded shadow-sm w-14 h-10 flex flex-col">
            <div className="flex gap-0.5 mb-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <div className="text-[6px] text-slate-700 font-semibold">PROJECT PLAN</div>
            <div className="flex gap-0.5 mt-1">
              <div className="w-3 h-0.5 bg-blue-300"></div>
              <div className="w-2 h-0.5 bg-green-300"></div>
              <div className="w-1 h-0.5 bg-red-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scene 4: Runner (Moves Plan -> Dev) */}
      <div className="anim-runner absolute bottom-0 left-[38vw] z-25 opacity-0">
        <svg width="40" height="60" viewBox="0 0 40 60">
          <circle cx="20" cy="10" r="5" stroke="#0891b2" strokeWidth="2" fill="#e0f2fe" />
          <line x1="20" y1="15" x2="26" y2="35" stroke="#0891b2" strokeWidth="2" /> {/* Body leaning */}
          <line x1="20" y1="20" x2="32" y2="22" stroke="#0891b2" strokeWidth="2" /> {/* Front arm */}
          <line x1="20" y1="20" x2="8" y2="28" stroke="#0891b2" strokeWidth="2" /> {/* Back arm */}
          <line x1="26" y1="35" x2="16" y2="55" stroke="#0891b2" strokeWidth="2" className="anim-legs-run" />
          <line x1="26" y1="35" x2="36" y2="55" stroke="#0891b2" strokeWidth="2" className="anim-legs-run" style={{ animationDelay: '0.15s' }} />
          {/* Carrying a document */}
          <rect x="28" y="18" width="5" height="7" fill="#0891b2" rx="0.5" opacity="0.8" />
        </svg>
      </div>

      {/* Scene 5: Dev Team (Right) */}
      <div className="anim-dev absolute bottom-0 left-[65vw] z-20 opacity-0">
        <div className="flex gap-4 items-end">
          {/* Developer */}
          <div className="relative">
            <svg width="35" height="60" viewBox="0 0 40 60">
              <circle cx="20" cy="10" r="5" stroke="#475569" strokeWidth="2" fill="#10b981" />
              <line x1="20" y1="15" x2="20" y2="40" stroke="#475569" strokeWidth="2" />
              <line x1="20" y1="25" x2="32" y2="28" stroke="#475569" strokeWidth="2" className="anim-typing" /> {/* Typing */}
              <line x1="20" y1="25" x2="8" y2="28" stroke="#475569" strokeWidth="2" className="anim-typing" style={{ animationDelay: '0.2s' }} />
              <line x1="20" y1="40" x2="15" y2="60" stroke="#475569" strokeWidth="2" />
              <line x1="20" y1="40" x2="25" y2="60" stroke="#475569" strokeWidth="2" />
            </svg>
            <div className="absolute -top-4 left-0 bg-white px-1 rounded shadow text-[9px] text-slate-700">Developer</div>
            {/* Laptop/Computer */}
            <div className="absolute bottom-2 left-8 w-10 h-6 bg-slate-800 rounded-sm border border-slate-700">
              <div className="absolute top-0.5 left-1 right-1 h-3 bg-slate-900 rounded text-[4px] text-green-400 font-mono p-0.5">
                <div className="animate-pulse">{'<code/>'}</div>
              </div>
              <div className="absolute bottom-0.5 left-2 right-2 h-0.5 bg-green-500 anim-typing-bar"></div>
            </div>
          </div>
          {/* Product appearing - WILL DISAPPEAR when van loads */}
          <div className="anim-product mb-10 w-12 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg border-2 border-white shadow-lg flex items-center justify-center text-white text-[9px] font-bold flex-col opacity-0">
            <div className="w-8 h-1 bg-white/40 mb-1 rounded-full"></div>
            <div className="flex items-center">
              <span className="text-[10px]">🚀</span>
              <span className="ml-0.5">APP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scene 6: Van Delivery (Right -> Left) */}
      <div className="anim-van absolute bottom-0 left-[100vw] z-30 drop-shadow-md opacity-0">
        <svg width="100" height="60" viewBox="0 0 100 60">
          {/* Van body - FLIPPED to face left */}
          <path d="M95 20 L30 20 L10 40 L10 48 L95 48 Z" fill="#1e293b" stroke="#0f172a" strokeWidth="1" />
          {/* Window */}
          <rect x="15" y="25" width="15" height="15" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
          {/* Rocket icon on van side */}
          <g transform="translate(60, 30) scale(-0.5, 0.5)">
            <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="0.5" />
          </g>
          {/* Company text - FLIPPED */}
          <text x="75" y="37" fill="white" fontSize="7" fontWeight="bold" letterSpacing="0.5" textAnchor="end">PEBBLES</text>
          {/* Front wheel (now on left) */}
          <g className="anim-wheels" style={{ transformOrigin: '25px 48px' }}>
            <circle cx="25" cy="48" r="7" fill="#0f172a" stroke="#475569" strokeWidth="1" />
            <circle cx="25" cy="48" r="3" fill="#94a3b8" />
            <line x1="25" y1="41" x2="25" y2="55" stroke="#334155" strokeWidth="1.5" />
            <line x1="18" y1="48" x2="32" y2="48" stroke="#334155" strokeWidth="1.5" />
          </g>
          {/* Back wheel (now on right) */}
          <g className="anim-wheels" style={{ transformOrigin: '75px 48px', animationDelay: '0.1s' }}>
            <circle cx="75" cy="48" r="7" fill="#0f172a" stroke="#475569" strokeWidth="1" />
            <circle cx="75" cy="48" r="3" fill="#94a3b8" />
            <line x1="75" y1="41" x2="75" y2="55" stroke="#334155" strokeWidth="1.5" />
            <line x1="68" y1="48" x2="82" y2="48" stroke="#334155" strokeWidth="1.5" />
          </g>
          {/* Cargo area indicator */}
          <rect x="40" y="28" width="50" height="15" fill="none" stroke="#475569" strokeWidth="1" strokeDasharray="3,2" rx="1" />
        </svg>
      </div>
    </div>
  );
};

export default StickmanStory;