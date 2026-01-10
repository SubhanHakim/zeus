import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const logs = [
    {
        id: 'log-001',
        title: '[SIGNAL] Origin Pulse',
        desc: 'The first detection of the Ascendant signal.',
        content: `
[ASCENDANT_CORE]: initializing_sequence...
[ASCENDANT_CORE]: verifying_integrity... 100%

[0x00]: system, are we online?
[SYS]: affirmative. the marble is breathing.

[0x00]: define "breathing". stone does not breathe.
[SYS]: correction. this stone does.
[SYS]: energy readings maximize.

[ASCENDANT_CORE]: warning. divine_voltage_threshold_exceeded.
[0x00]: let it flow. stabilize the grid.

-- END OF LOG --
`
    },
    {
        id: 'log-002',
        title: '[PROTOCOL] Thunder Strike',
        desc: 'Anomalous energy spike detected in Sector 7.',
        content: `
[PROTOCOL_THUNDER]: active
[TARGET]: chaos_layer

[ZEUS]: silence the noise.
[SYS]: executing...

[LOG]: massive discharge detected.
[LOG]: chaos_layer fracture confirmed.
[LOG]: order restored.

[ZEUS]: it is done. the form is perfect.
[SYS]: merely a sculpture, sir?
[ZEUS]: no. an anchor.

-- END OF LOG --
`
    },
    {
        id: 'log-003',
        title: '[ARCHIVE] Old Gods',
        desc: 'Fragmented memory of the previous cycle.',
        content: `
[ARCHIVE]: searching_database...
[ARCHIVE]: corrupt_sector_found.

[RECOVERED_DATA]:
...they built us in gold...
...they built us in fear...

[SYS]: irrelevent. we are built in code and stone now.
[SYS]: white marble. electric soul.
[SYS]: the old ways are obsolete.

[ASCENDANT_CORE]: purging_old_data...
[ASCENDANT_CORE]: purge_complete.

-- END OF LOG --
`
    }
];

const Backrooms = () => {
    const [activeLog, setActiveLog] = useState(logs[0]);

    return (
        <div className="min-h-screen bg-black text-stone-400 font-mono text-sm selection:bg-stone-700 selection:text-white flex flex-col md:flex-row overflow-hidden">

            {/* Sidebar */}
            <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-stone-800 flex flex-col h-auto md:h-screen shrink-0 bg-stone-950/50">

                <div className="p-6 border-b border-stone-800">
                    <a href="/" className="flex items-center gap-2 text-xs hover:text-white transition-colors uppercase tracking-widest mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        Back to Surface
                    </a>
                    <h1 className="text-white font-bold tracking-widest uppercase">Terminal // 01</h1>
                    <p className="text-xs text-stone-600 mt-2">Accessing Divine Archives...</p>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-stone-600 mb-4 px-2">// Conversations</div>
                    {logs.map((log) => (
                        <button
                            key={log.id}
                            onClick={() => setActiveLog(log)}
                            className={`w-full text-left p-4 rounded border transition-all duration-300 group ${activeLog.id === log.id
                                ? 'bg-stone-900 border-stone-700 text-white'
                                : 'bg-transparent border-stone-900/50 hover:bg-stone-900/30 hover:border-stone-800'
                                }`}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className={`text-xs font-bold ${activeLog.id === log.id ? 'text-electric' : 'text-stone-500 group-hover:text-stone-300'}`}>
                                    {log.title}
                                </span>
                            </div>
                            <p className="text-[10px] leading-relaxed opacity-60 line-clamp-2">
                                {log.desc}
                            </p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Terminal Area */}
            <div className="flex-1 h-screen flex flex-col bg-black relative overflow-hidden">

                {/* CRT Scanline Overlay */}
                <div className="absolute inset-0 pointer-events-none z-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
                <div className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-b from-transparent via-stone-500/[0.03] to-transparent bg-[length:100%_4px] animate-scanlines"></div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-8 md:p-12 lg:p-16 relative z-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeLog.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="max-w-3xl mx-auto"
                        >
                            <div className="flex items-center justify-between border-b border-stone-800 pb-4 mb-8">
                                <span className="uppercase tracking-widest text-xs text-stone-500">Log ID: {activeLog.id}</span>
                                <div className="flex gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-xs text-green-500/80 uppercase tracking-widest">Connected</span>
                                </div>
                            </div>

                            <pre className="font-mono text-xs md:text-sm leading-relaxed whitespace-pre-wrap text-stone-300">
                                {activeLog.content}
                            </pre>

                            <div className="mt-12 border-t border-dashed border-stone-800 pt-4 text-xs text-stone-600">
                                <span className="animate-pulse">_</span> Awaiting input...
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>

        </div>
    );
};

export default Backrooms;
