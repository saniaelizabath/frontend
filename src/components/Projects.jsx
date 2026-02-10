import { useState, useEffect, useRef } from 'react';

const Projects = () => {
    const [activeYear, setActiveYear] = useState(2022);
    const [visibleMilestones, setVisibleMilestones] = useState(new Set());
    const observerRef = useRef(null);

    const timelineData = {
        2022: {
            title: "Foundation & Market Entry",
            subtitle: "Company Founded: Mag Engineering Services",
            color: "blue",
            icon: "",
            focus: "Core Focus: Turnkey Ship Repair & Marine Engineering",
            milestones: [
                {
                    title: "Major Early Projects",
                    projects: [
                        "INS Shakti — Mechanical Ship Repair Turnkey",
                        "Tug Sealion Apex — Ship Repair",
                        "Akship Tug 9 — Engineering Support",
                        "Tug Ocean Success — Mechanical Works",
                        "TCI Lakshmi — Marine Engineering Scope",
                        "MSC Manasa F — BWTS Retrofit Turnkey Project"
                    ]
                },
                {
                    title: "Strategic Outcome",
                    outcomes: [
                        "Built multidisciplinary marine engineering team",
                        "Established execution credibility inside major shipyards",
                        "Developed turnkey project delivery capability"
                    ]
                }
            ]
        },
        2023: {
            title: "Transformation & Defence Expansion",
            subtitle: "Defence & New Build Entry",
            color: "green",
            icon: "",
            focus: "Expanded from ship repair into defence-linked new build programs",
            milestones: [
                {
                    title: "Q1 – Q2 2023 | Key Projects",
                    projects: [
                        "Navayuga Dredger II — L&T Shipbuilding",
                        "MT Loyalty — L&T Shipbuilding",
                        "Telerig — L&T Shipbuilding",
                        "Anti Submarine Warfare II — L&T Shipbuilding (New Build)",
                        "FDN III — Hindustan Shipyard Limited (New Build)"
                    ]
                },
                {
                    title: "June 2023 | Strategic Milestone",
                    outcomes: [
                        "Company renamed to Mag Marine Services Private Limited",
                        "Kochi Office launched — expanding operational footprint",
                        "Strengthened corporate structure and national positioning"
                    ]
                },
                {
                    title: "Q3 – Q4 2023 | Multi-Shipyard Scale",
                    projects: [
                        "Tug Ocean Fortune — L&T Shipbuilding",
                        "Tug Ocean Prestige — L&T Shipbuilding",
                        "US Navy Salvor — L&T Shipbuilding",
                        "Tug Mermaid — L&T Shipbuilding",
                        "Marine Civil Works — L&T Shiplift Chennai",
                        "Survey Vessel — L&T Shipbuilding (New Build)"
                    ],
                    outcomes: [
                        "Established presence in Hindustan Shipyard Limited",
                        "Transitioned into multi-project execution across India"
                    ]
                }
            ]
        },
        2024: {
            title: "National Expansion & Strategic Integration",
            subtitle: "OEM Collaboration & Defence Maintenance",
            color: "yellow",
            icon: "",
            focus: "Multi-location execution across major Indian shipyards",
            milestones: [
                {
                    title: "Cochin Shipyard Limited — Defence Maintenance",
                    subtitle: "Collaboration with Johnson Controls India",
                    projects: [
                        "INS Sahyadri — Periodic Maintenance Support",
                        "INS Vikramaditya — Maintenance Execution"
                    ],
                    outcomes: [
                        "Entry into OEM-linked defence lifecycle support ecosystem"
                    ]
                },
                {
                    title: "L&T Shipbuilding — ASW Series Installation",
                    projects: [
                        "Installation works for Anti-Submarine Warfare vessels"
                    ],
                    outcomes: [
                        "Strengthened electrical, mechanical & outfit capabilities"
                    ]
                },
                {
                    title: "Waterways Shipyard, Udupi — Operational Expansion",
                    projects: [
                        "Auxiliary Equipment Installation — Y178 & Y189"
                    ],
                    outcomes: [
                        "Established presence in private shipbuilding sector"
                    ]
                },
                {
                    title: "Hindustan Shipyard Limited — Engineering Projects",
                    projects: [
                        "Piping Projects — VC11199"
                    ],
                    outcomes: [
                        "Expanded multidisciplinary execution capability",
                        "Increased manpower deployment"
                    ]
                }
            ]
        },
        2025: {
            title: "Turnkey Leadership & Strategic Partnerships",
            subtitle: "Full-Scope Execution Excellence",
            color: "red",
            icon: "",
            focus: "Mechanical, electrical & piping new-build contracts + GRSE onboarding",
            milestones: [
                {
                    title: "Chowgule Shipbuilding, Mangalore — C311 New Build",
                    projects: [
                        "Turnkey Mechanical Installation"
                    ],
                    outcomes: [
                        "Strengthened position as full-scope execution contractor"
                    ]
                },
                {
                    title: "L&T Shipbuilding — Electrical Turnkey Expansion",
                    projects: [
                        "MPV 1 — Electrical Installation (Turnkey)",
                        "MPV 2 — Electrical New Build Works"
                    ]
                },
                {
                    title: "L&T Shipbuilding — Piping New Build Projects",
                    projects: [
                        "CTS 1 — Piping Installation"
                    ]
                },
                {
                    title: "GRSE Ecosystem — Strategic Vendor Onboarding",
                    outcomes: [
                        "Added as approved vendor for GRSE-linked projects at Chennai",
                        "Expanded defence shipbuilding ecosystem presence"
                    ]
                }
            ]
        }
    };

    // Intersection Observer for scroll animations
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleMilestones((prev) => new Set([...prev, entry.target.dataset.index]));
                    }
                });
            },
            { threshold: 0.2 }
        );

        const milestoneElements = document.querySelectorAll('[data-milestone]');
        milestoneElements.forEach((el) => observerRef.current.observe(el));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [activeYear]);

    const scrollToYear = (year) => {
        setActiveYear(year);
        const element = document.getElementById(`year-${year}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
            {/* Animated Wave Background */}
            <div className="fixed inset-0 z-0 overflow-hidden">
                <svg className="absolute bottom-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" preserveAspectRatio="none">
                    <path className="wave wave1" fill="rgba(59, 130, 246, 0.15)" d="M0,400 C480,200 960,600 1440,400 L1440,800 L0,800 Z">
                        <animate attributeName="d" dur="20s" repeatCount="indefinite" values="
                            M0,400 C480,200 960,600 1440,400 L1440,800 L0,800 Z;
                            M0,400 C480,600 960,200 1440,400 L1440,800 L0,800 Z;
                            M0,400 C480,200 960,600 1440,400 L1440,800 L0,800 Z" />
                    </path>
                    <path className="wave wave2" fill="rgba(96, 165, 250, 0.1)" d="M0,500 C480,300 960,700 1440,500 L1440,800 L0,800 Z">
                        <animate attributeName="d" dur="15s" repeatCount="indefinite" values="
                            M0,500 C480,300 960,700 1440,500 L1440,800 L0,800 Z;
                            M0,500 C480,700 960,300 1440,500 L1440,800 L0,800 Z;
                            M0,500 C480,300 960,700 1440,500 L1440,800 L0,800 Z" />
                    </path>
                    <path className="wave wave3" fill="rgba(147, 197, 253, 0.08)" d="M0,600 C480,400 960,800 1440,600 L1440,800 L0,800 Z">
                        <animate attributeName="d" dur="25s" repeatCount="indefinite" values="
                            M0,600 C480,400 960,800 1440,600 L1440,800 L0,800 Z;
                            M0,600 C480,800 960,400 1440,600 L1440,800 L0,800 Z;
                            M0,600 C480,400 960,800 1440,600 L1440,800 L0,800 Z" />
                    </path>
                </svg>
            </div>

            {/* Content wrapper */}
            <div className="relative z-10">
                {/* Header */}
                <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-md">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-2 sm:mb-3 leading-tight">
                            <span className="text-slate-800">
                                MAG MARINE SERVICES
                            </span>
                        </h1>
                        <p className="text-center text-slate-700 text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6 md:mb-8 tracking-wide px-2">
                            Strategic Growth Roadmap (2022 – 2025)
                        </p>

                        {/* Year Navigation */}
                        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
                            {[2022, 2023, 2024, 2025].map((year) => (
                                <button
                                    key={year}
                                    onClick={() => scrollToYear(year)}
                                    className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${activeYear === year
                                            ? 'bg-slate-800 text-white shadow-xl shadow-slate-400/40 scale-105'
                                            : 'bg-white text-slate-700 hover:bg-slate-50 border-2 border-slate-300 shadow-md'
                                        }`}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Timeline Content */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
                    {Object.entries(timelineData).map(([year, data], yearIndex) => (
                        <div
                            key={year}
                            id={`year-${year}`}
                            className="mb-16 sm:mb-20 md:mb-24 scroll-mt-24 sm:scroll-mt-32"
                        >
                            {/* Year Header */}
                            <div className="relative mb-8 sm:mb-12 md:mb-16">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6">
                                    <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-blue-900/50">
                                        {year}
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-2 sm:mb-3 leading-tight">
                                            {data.title}
                                        </h2>
                                        <p className="text-lg sm:text-xl md:text-2xl text-slate-800 font-bold">
                                            {data.subtitle}
                                        </p>
                                        <p className="text-slate-700 mt-2 sm:mt-3 italic text-sm sm:text-base md:text-lg font-medium">
                                            {data.focus}
                                        </p>
                                    </div>
                                </div>

                                {/* Decorative line */}
                                <div className="h-1 sm:h-1.5 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 rounded-full w-full shadow-lg"></div>
                            </div>

                            {/* Milestones */}
                            <div className="space-y-6 sm:space-y-8 md:space-y-10 relative pl-6 sm:pl-8 md:pl-10 border-l-2 sm:border-l-4 border-blue-300">
                                {data.milestones.map((milestone, idx) => (
                                    <div
                                        key={idx}
                                        data-milestone
                                        data-index={`${year}-${idx}`}
                                        className={`relative transition-all duration-700 transform ${visibleMilestones.has(`${year}-${idx}`)
                                                ? 'opacity-100 translate-x-0'
                                                : 'opacity-0 -translate-x-12'
                                            }`}
                                        style={{ transitionDelay: `${idx * 150}ms` }}
                                    >
                                        {/* Timeline dot */}
                                        <div className="absolute -left-[30px] sm:-left-[38px] md:-left-[46px] top-4 sm:top-6 md:top-8 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full border-2 sm:border-4 border-white shadow-xl shadow-blue-300/50"></div>

                                        {/* Milestone Card */}
                                        <div className="bg-blue-950/15 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-300/40 hover:border-blue-400 hover:bg-blue-950/20 group">
                                            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-3 sm:mb-4 md:mb-5 group-hover:text-blue-700 transition-colors leading-tight">
                                                {milestone.title}
                                            </h3>

                                            {milestone.subtitle && (
                                                <p className="text-slate-800 font-semibold mb-3 sm:mb-4 italic text-base sm:text-lg">
                                                    {milestone.subtitle}
                                                </p>
                                            )}

                                            {milestone.projects && (
                                                <div className="mb-4 sm:mb-6">
                                                    <h4 className="text-xs sm:text-sm font-black text-slate-800 mb-2 sm:mb-3 uppercase tracking-wider">
                                                        Projects
                                                    </h4>
                                                    <ul className="space-y-2 sm:space-y-3">
                                                        {milestone.projects.map((project, pIdx) => (
                                                            <li
                                                                key={pIdx}
                                                                className="flex items-start gap-2 sm:gap-3 md:gap-4 text-slate-700 font-medium text-sm sm:text-base hover:text-slate-900 transition-colors"
                                                            >
                                                                <span className="text-blue-600 text-lg sm:text-xl mt-0.5 flex-shrink-0">⚓</span>
                                                                <span className="leading-relaxed">{project}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {milestone.outcomes && (
                                                <div className="bg-blue-50/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-blue-200">
                                                    <ul className="space-y-2 sm:space-y-3">
                                                        {milestone.outcomes.map((outcome, oIdx) => (
                                                            <li
                                                                key={oIdx}
                                                                className="flex items-start gap-2 sm:gap-3 md:gap-4 text-slate-800 font-semibold text-sm sm:text-base"
                                                            >
                                                                <span className="text-green-600 text-lg sm:text-xl mt-0.5 flex-shrink-0">✓</span>
                                                                <span className="leading-relaxed">{outcome}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Strategic Evolution Summary - Refined Design */}
                    <div className="mt-16 sm:mt-20 md:mt-28 bg-blue-/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-16 shadow-2xl border-2 border-slate-200">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 md:mb-12 text-center text-slate-900 leading-tight px-2">
                            Company Evolution Timeline
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                            {/* 2022 Card */}
                            <div className="relative overflow-hidden bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-400 group">
                                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-50 rounded-full -mr-8 sm:-mr-10 md:-mr-12 -mt-8 sm:-mt-10 md:-mt-12 opacity-50"></div>
                                <div className="relative z-10">
                                    <div className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-400 mb-1 sm:mb-2">2022</div>
                                    <h3 className="font-black text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-slate-900 group-hover:text-blue-700 transition-colors">Foundation Phase</h3>
                                    <p className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
                                        Entry through turnkey ship repair & retrofit execution
                                    </p>
                                </div>
                            </div>

                            {/* 2023 Card */}
                            <div className="relative overflow-hidden bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-400 group">
                                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-50 rounded-full -mr-8 sm:-mr-10 md:-mr-12 -mt-8 sm:-mt-10 md:-mt-12 opacity-50"></div>
                                <div className="relative z-10">
                                    <div className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-500 mb-1 sm:mb-2">2023</div>
                                    <h3 className="font-black text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-slate-900 group-hover:text-blue-700 transition-colors">Transformation Era</h3>
                                    <p className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
                                        Rebranding, Kochi expansion, defence new-build entry
                                    </p>
                                </div>
                            </div>

                            {/* 2024 Card */}
                            <div className="relative overflow-hidden bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-400 group">
                                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-50 rounded-full -mr-8 sm:-mr-10 md:-mr-12 -mt-8 sm:-mt-10 md:-mt-12 opacity-50"></div>
                                <div className="relative z-10">
                                    <div className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-600 mb-1 sm:mb-2">2024</div>
                                    <h3 className="font-black text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-slate-900 group-hover:text-blue-700 transition-colors">National Expansion</h3>
                                    <p className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
                                        OEM collaboration, multi-shipyard execution, defence maintenance
                                    </p>
                                </div>
                            </div>

                            {/* 2025 Card */}
                            <div className="relative overflow-hidden bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-400 group">
                                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-50 rounded-full -mr-8 sm:-mr-10 md:-mr-12 -mt-8 sm:-mt-10 md:-mt-12 opacity-50"></div>
                                <div className="relative z-10">
                                    <div className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-700 mb-1 sm:mb-2">2025</div>
                                    <h3 className="font-black text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-slate-900 group-hover:text-blue-700 transition-colors">Turnkey Leadership</h3>
                                    <p className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
                                        Full-scope mechanical, electrical & piping new-build contracts + GRSE onboarding
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;