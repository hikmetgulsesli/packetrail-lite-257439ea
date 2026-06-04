// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gameplay - PacketRail Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BarChart3, Bolt, CircleHelp, Factory, Grid3X3, Heart, History, LogOut, PackageSearch, Pause, RefreshCw, Settings, SlidersHorizontal, Trophy } from "lucide-react";


export type GameplayPacketrailLiteActionId = "settings-1" | "history-2" | "upgrade-engine-3" | "pause-4" | "restart-5" | "start-game-6" | "dashboard-1" | "arsenal-2" | "leaderboard-3" | "support-4" | "exit-5" | "engage-6" | "loadout-7" | "intel-8" | "systems-9";

export interface GameplayPacketrailLiteProps {
  actions?: Partial<Record<GameplayPacketrailLiteActionId, () => void>>;
  runtime?: { player?: { lane?: number; position?: number }; obstacles?: Array<{ lane?: number; position?: number }>; shards?: Array<{ lane?: number; position?: number }>; score?: number; energy?: number; lives?: number; paused?: boolean };

}

export function GameplayPacketrailLite({ actions, runtime }: GameplayPacketrailLiteProps) {
  void runtime;
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-desktop md:px-margin-desktop px-margin-mobile py-unit h-16 bg-surface-dim/40 backdrop-blur-md border-b border-primary/20 shadow-[0_0_15px_rgba(0,220,230,0.3)]">
      <div className="flex items-center gap-4">
      <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary tracking-tighter hidden md:block">PacketRail Lite</h1>
      <h1 className="font-headline-md text-headline-md text-primary tracking-tighter md:hidden">PR Lite</h1>
      </div>
      {/* HUD Central */}
      <div className="flex items-center gap-8">
      <div className="flex flex-col items-center">
      <span className="font-label-mono text-label-mono text-primary-fixed-dim uppercase tracking-widest mb-1">Score</span>
      <span className="font-score-xl text-score-xl text-primary drop-shadow-[0_0_8px_#6ff6ff]">12,450</span>
      </div>
      <div className="hidden md:flex flex-col items-center border-l border-r border-primary/20 px-6">
      <span className="font-label-mono text-label-mono text-secondary-fixed uppercase tracking-widest mb-1">Multiplier</span>
      <span className="font-score-xl text-score-xl text-secondary-container drop-shadow-[0_0_10px_#fe00fe]">x5</span>
      </div>
      <div className="flex flex-col items-center">
      <span className="font-label-mono text-label-mono text-tertiary-fixed-dim uppercase tracking-widest mb-1">Level</span>
      <span className="font-score-xl text-score-xl text-tertiary drop-shadow-[0_0_8px_#66ff8f]">04</span>
      </div>
      </div>
      <div className="flex items-center gap-4 text-primary-fixed-dim">
      <button className="hover:text-primary hover:drop-shadow-[0_0_8px_#6ff6ff] transition-colors active:scale-95 duration-75" type="button" aria-label="Settings" data-action-id="settings-1" onClick={actions?.["settings-1"]}>
      <Settings  style={{fontVariationSettings: "'FILL' 0"}} className="text-2xl" aria-hidden={true} focusable="false" />
      </button>
      <button className="hover:text-primary hover:drop-shadow-[0_0_8px_#6ff6ff] transition-colors active:scale-95 duration-75" type="button" aria-label="History" data-action-id="history-2" onClick={actions?.["history-2"]}>
      <History  style={{fontVariationSettings: "'FILL' 0"}} className="text-2xl" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* SideNavBar (Hidden on Mobile, Visible on Desktop for consistency with anchors, though game might take full screen, keeping semantic shell logic) */}
      <nav className="hidden md:flex flex-col h-full py-panel-padding fixed left-0 top-0 w-64 bg-surface-container-low/80 backdrop-blur-xl border-r border-secondary/30 shadow-[5px_0_20px_rgba(254,0,254,0.15)] z-40 pt-24">
      <div className="px-panel-padding mb-8">
      <h2 className="font-headline-md text-headline-md text-secondary-fixed italic">OPERATOR_01</h2>
      <p className="font-label-mono text-label-mono text-on-surface-variant mt-2">Rank: Elite</p>
      </div>
      <div className="flex flex-col flex-grow gap-2 px-4">
      <a className="flex items-center gap-4 px-4 py-3 rounded text-on-surface-variant opacity-70 hover:bg-secondary/10 hover:text-secondary-fixed transition-colors hover:translate-x-1 duration-200" href="#" data-action-id="dashboard-1" onClick={(event) => { event.preventDefault(); actions?.["dashboard-1"]?.(); }}>
      <Grid3X3 aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-label-mono">Dashboard</span>
      </a>
      <a className="flex items-center gap-4 px-4 py-3 rounded bg-secondary-container text-on-secondary-container border-l-4 border-secondary shadow-[inset_0_0_10px_#fe00fe]" href="#" data-action-id="arsenal-2" onClick={(event) => { event.preventDefault(); actions?.["arsenal-2"]?.(); }}>
      <Factory  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-label-mono">Arsenal</span>
      </a>
      <a className="flex items-center gap-4 px-4 py-3 rounded text-on-surface-variant opacity-70 hover:bg-secondary/10 hover:text-secondary-fixed transition-colors hover:translate-x-1 duration-200" href="#" data-action-id="leaderboard-3" onClick={(event) => { event.preventDefault(); actions?.["leaderboard-3"]?.(); }}>
      <Trophy aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-label-mono">Leaderboard</span>
      </a>
      </div>
      <div className="px-4 mt-auto space-y-4">
      <button className="w-full py-3 bg-secondary-container text-on-secondary-container font-label-mono text-label-mono rounded hover:bg-secondary transition-colors shadow-[0_0_10px_#fe00fe] uppercase" type="button" data-action-id="upgrade-engine-3" onClick={actions?.["upgrade-engine-3"]}>
                      UPGRADE ENGINE
                  </button>
      <div className="flex flex-col gap-2 border-t border-secondary/30 pt-4">
      <a className="flex items-center gap-4 px-4 py-2 rounded text-on-surface-variant opacity-70 hover:bg-secondary/10 hover:text-secondary-fixed transition-colors" href="#" data-action-id="support-4" onClick={(event) => { event.preventDefault(); actions?.["support-4"]?.(); }}>
      <CircleHelp className="text-sm" aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-label-mono">Support</span>
      </a>
      <a className="flex items-center gap-4 px-4 py-2 rounded text-on-surface-variant opacity-70 hover:bg-secondary/10 hover:text-secondary-fixed transition-colors" href="#" data-action-id="exit-5" onClick={(event) => { event.preventDefault(); actions?.["exit-5"]?.(); }}>
      <LogOut className="text-sm" aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-label-mono">Exit</span>
      </a>
      </div>
      </div>
      </nav>
      {/* Game Canvas */}
      <main className="w-full max-w-[1280px] h-screen flex-grow relative overflow-hidden mt-16 md:ml-64 z-10 flex flex-col justify-center items-center">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none transform -skew-y-6 scale-125 z-0"></div>
      {/* Deep Space Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/50 to-surface z-0 pointer-events-none"></div>
      {/* In-Game Elements (Rails & Packets) */}
      <div className="relative w-full max-w-4xl h-[600px] flex justify-between px-12 z-10 perspective-[1000px]">
      {/* Rail 1 */}
      <div className="w-2 h-full bg-primary/20 rail-glow relative transform rotate-y-12">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4 h-16 bg-primary-fixed rounded-full shadow-[0_0_20px_#6ff6ff]"></div>
      </div>
      {/* Rail 2 (Active) */}
      <div className="w-2 h-full bg-primary/40 rail-glow relative transform scale-110">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-6 h-6 bg-secondary-container rounded-sm packet-pulse rotate-45 z-20 transform -translate-y-1/2"></div>
      {/* Trail */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1/2 bg-gradient-to-b from-transparent to-primary opacity-50"></div>
      </div>
      {/* Rail 3 */}
      <div className="w-2 h-full bg-primary/20 rail-glow relative transform -rotate-y-12">
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-4 h-8 bg-tertiary-fixed rounded-full shadow-[0_0_15px_#66ff8f]"></div>
      </div>
      </div>
      {/* Overlay UI (Lives & Controls) */}
      <div className="absolute bottom-8 left-8 z-20 flex gap-2">
      <Heart  style={{fontVariationSettings: "'FILL' 1"}} className="text-secondary-fixed drop-shadow-[0_0_5px_#ffd7f5]" aria-hidden={true} focusable="false" />
      <Heart  style={{fontVariationSettings: "'FILL' 1"}} className="text-secondary-fixed drop-shadow-[0_0_5px_#ffd7f5]" aria-hidden={true} focusable="false" />
      <Heart className="text-on-surface-variant/30" aria-hidden={true} focusable="false" />
      </div>
      <div className="absolute bottom-8 right-8 z-20 flex gap-4">
      <button className="font-label-mono text-label-mono text-primary-fixed-dim px-4 py-2 border border-primary/30 rounded backdrop-blur-sm hover:bg-primary/10 transition-colors flex items-center gap-2 uppercase" type="button" data-action-id="pause-4" onClick={actions?.["pause-4"]}>
      <Pause className="text-sm" aria-hidden={true} focusable="false" /> Pause
                  </button>
      <button className="font-label-mono text-label-mono text-error px-4 py-2 border border-error/30 rounded backdrop-blur-sm hover:bg-error/10 transition-colors flex items-center gap-2 uppercase" type="button" data-action-id="restart-5" onClick={actions?.["restart-5"]}>
      <RefreshCw className="text-sm" aria-hidden={true} focusable="false" /> Restart
                  </button>
      </div>
      {/* START GAME Modal / Overlay (Currently visible as requested for initial state) */}
      <div className="absolute inset-0 bg-surface/80 backdrop-blur-[32px] z-30 flex flex-col justify-center items-center p-8 text-center border border-primary/20 m-4 md:m-16 rounded-xl">
      <h2 className="font-display-lg text-display-lg text-primary tracking-tighter drop-shadow-[0_0_20px_#00dce6] mb-8">SYSTEM READY</h2>
      <p className="font-label-mono text-label-mono text-on-surface-variant max-w-md mb-12 uppercase tracking-widest leading-loose">
                       Initialize sequence. Defend the rails. Maintain optimal multiplier.
                   </p>
      <button className="bg-primary-container text-on-primary-container font-headline-md text-headline-md px-12 py-6 rounded uppercase tracking-wider flicker shadow-[0_0_20px_#00f3ff] border-2 border-primary-fixed hover:scale-105 transition-transform duration-200" type="button" data-action-id="start-game-6" onClick={actions?.["start-game-6"]}>
                       START GAME
                   </button>
      </div>
      </main>
      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-margin-mobile pb-4 pt-2 bg-surface-dim/60 backdrop-blur-lg border-t border-tertiary/20 shadow-[0_-4px_20px_rgba(44,252,123,0.2)] rounded-t-xl">
      <a className="flex flex-col items-center justify-center text-on-surface-variant/60 hover:text-tertiary-fixed-dim transition-colors" href="#" data-action-id="engage-6" onClick={(event) => { event.preventDefault(); actions?.["engage-6"]?.(); }}>
      <Bolt aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-[10px] mt-1">Engage</span>
      </a>
      <a className="flex flex-col items-center justify-center bg-tertiary-container/20 text-tertiary-fixed font-bold rounded-full px-4 py-1 active:scale-110 duration-150" href="#" data-action-id="loadout-7" onClick={(event) => { event.preventDefault(); actions?.["loadout-7"]?.(); }}>
      <PackageSearch  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-[10px] mt-1">Loadout</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant/60 hover:text-tertiary-fixed-dim transition-colors" href="#" data-action-id="intel-8" onClick={(event) => { event.preventDefault(); actions?.["intel-8"]?.(); }}>
      <BarChart3 aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-[10px] mt-1">Intel</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant/60 hover:text-tertiary-fixed-dim transition-colors" href="#" data-action-id="systems-9" onClick={(event) => { event.preventDefault(); actions?.["systems-9"]?.(); }}>
      <SlidersHorizontal aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-[10px] mt-1">Systems</span>
      </a>
      </nav>
    </>
  );
}
