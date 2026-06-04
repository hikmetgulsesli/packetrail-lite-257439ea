// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - PacketRail Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, ArrowRight, Keyboard, RefreshCw, Save, Settings, X } from "lucide-react";


export type GameSettingsPacketrailLiteActionId = "casual-1" | "normal-2" | "hardcore-3" | "save-and-return-4" | "reset-preferences-5" | "back-to-game-6";

export interface GameSettingsPacketrailLiteProps {
  actions?: Partial<Record<GameSettingsPacketrailLiteActionId, () => void>>;

}

export function GameSettingsPacketrailLite({ actions }: GameSettingsPacketrailLiteProps) {
  return (
    <>
      {/* Blurred Gameplay Background Layer */}
      <div className="absolute inset-0 bg-blur-gameplay z-0" data-alt="A stylized, abstract cyberpunk hacking interface or neon arcade game background. Features dark deep space navy base with streaks of luminous cyan and bright magenta light trailing across the screen, suggesting high-velocity data packets or energetic rails. The entire scene is heavily blurred as if out of focus, serving as an atmospheric backdrop for a game menu overlay."></div>
      <div className="absolute inset-0 backdrop-blur-[32px] bg-background/60 z-0"></div>
      {/* Main Settings Modal Content */}
      <main className="relative z-10 w-full max-w-[600px] px-margin-mobile md:px-0">
      <div className="bg-surface-container-low/80 backdrop-blur-xl border border-primary/20 shadow-[0_0_20px_rgba(0,243,255,0.15)] rounded-xl flex flex-col p-panel-padding neon-border-primary">
      {/* Header */}
      <header className="flex justify-between items-center mb-8 border-b border-primary/10 pb-4">
      <h1 className="font-headline-md text-headline-md text-primary tracking-wide">SETTINGS</h1>
      <Settings className="text-primary-fixed-dim" aria-hidden={true} focusable="false" />
      </header>
      {/* Settings Content */}
      <div className="flex flex-col gap-8 flex-grow overflow-y-auto pr-2" style={{maxHeight: "60vh"}}>
      {/* Difficulty Setting */}
      <section className="flex flex-col gap-4">
      <h2 className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">System Difficulty</h2>
      <div className="grid grid-cols-3 gap-unit">
      <button className="bg-surface-dim border border-primary/20 text-on-surface-variant py-2 font-label-mono text-label-mono hover:bg-primary/10 hover:text-primary transition-colors focus:bg-primary-container focus:text-on-primary-container focus:border-primary focus:shadow-[0_0_10px_#00f3ff]" type="button" data-action-id="casual-1" onClick={actions?.["casual-1"]}>Casual</button>
      <button className="bg-primary-container text-on-primary-container border border-primary shadow-[0_0_10px_#00f3ff] py-2 font-label-mono text-label-mono" type="button" data-action-id="normal-2" onClick={actions?.["normal-2"]}>Normal</button>
      <button className="bg-surface-dim border border-primary/20 text-on-surface-variant py-2 font-label-mono text-label-mono hover:bg-primary/10 hover:text-primary transition-colors focus:bg-primary-container focus:text-on-primary-container focus:border-primary focus:shadow-[0_0_10px_#00f3ff]" type="button" data-action-id="hardcore-3" onClick={actions?.["hardcore-3"]}>Hardcore</button>
      </div>
      </section>
      {/* Speed Setting */}
      <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
      <h2 className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">Packet Velocity</h2>
      <span className="font-score-xl text-score-xl text-primary text-[24px]">1.0x</span>
      </div>
      <div className="pt-2 pb-4">
      <input className="w-full" max="2.0" min="0.5" step="0.1" type="range" defaultValue="1.0" />
      <div className="flex justify-between text-on-surface-variant/50 font-label-mono text-label-mono mt-2 text-[10px]">
      <span>Slow</span>
      <span>Standard</span>
      <span>Max Overdrive</span>
      </div>
      </div>
      </section>
      {/* Input Help Section */}
      <section className="bg-surface-dim/50 border border-secondary/20 rounded-lg p-4 neon-border-secondary">
      <h2 className="font-label-mono text-label-mono text-secondary-fixed mb-4 uppercase tracking-widest flex items-center gap-2">
      <Keyboard className="text-[16px]" aria-hidden={true} focusable="false" />
                              Input Diagnostics
                          </h2>
      <ul className="flex flex-col gap-3 font-label-mono text-label-mono text-sm">
      <li className="flex items-center justify-between">
      <span className="text-on-surface">Pause Operation</span>
      <span className="bg-surface-container border border-outline-variant px-3 py-1 text-primary-fixed-dim rounded shadow-[inset_0_0_5px_rgba(0,220,230,0.1)]">SPACE</span>
      </li>
      <li className="flex items-center justify-between">
      <span className="text-on-surface">Redirect Packet</span>
      <span className="flex gap-1">
      <ArrowLeft className="bg-surface-container border border-outline-variant px-2 py-1 text-primary-fixed-dim rounded shadow-[inset_0_0_5px_rgba(0,220,230,0.1)] text-[16px]" aria-hidden={true} focusable="false" />
      <ArrowRight className="bg-surface-container border border-outline-variant px-2 py-1 text-primary-fixed-dim rounded shadow-[inset_0_0_5px_rgba(0,220,230,0.1)] text-[16px]" aria-hidden={true} focusable="false" />
      </span>
      </li>
      </ul>
      </section>
      </div>
      {/* Footer Actions */}
      <footer className="mt-8 pt-6 border-t border-primary/10 flex flex-col gap-4">
      <button className="w-full bg-primary-container text-on-primary-container font-label-mono text-label-mono py-3 font-bold hover:shadow-[0_0_15px_#00f3ff] hover:bg-primary-fixed transition-colors group flex justify-center items-center gap-2" type="button" data-action-id="save-and-return-4" onClick={actions?.["save-and-return-4"]}>
      <Save className="group-hover:animate-pulse" aria-hidden={true} focusable="false" />
                          SAVE &amp; RETURN
                      </button>
      <div className="grid grid-cols-2 gap-unit">
      <button className="bg-surface-dim border border-outline-variant text-on-surface-variant font-label-mono text-label-mono py-2 hover:text-primary hover:border-primary/50 transition-colors flex justify-center items-center gap-2" type="button" data-action-id="reset-preferences-5" onClick={actions?.["reset-preferences-5"]}>
      <RefreshCw className="text-[16px]" aria-hidden={true} focusable="false" />
                              RESET PREFERENCES
                          </button>
      <button className="bg-surface-dim border border-outline-variant text-on-surface-variant font-label-mono text-label-mono py-2 hover:text-primary hover:border-primary/50 transition-colors flex justify-center items-center gap-2" type="button" data-action-id="back-to-game-6" onClick={actions?.["back-to-game-6"]}>
      <X className="text-[16px]" aria-hidden={true} focusable="false" />
                              BACK TO GAME
                          </button>
      </div>
      </footer>
      </div>
      </main>
    </>
  );
}
