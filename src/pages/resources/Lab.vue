<template>
    <div>
        <article v-if="control.selectedOption === 'Featured'">
            <div class="flex flex-row justify-center h-[62dvh] w-full">
                <!-- Main large card: WebSenses -->
                <section
                    class="relative w-[70%] h-full p-1 rounded-sm overflow-hidden mr-2 bg-[image:var(--background-image-gradient-border)] bg-no-repeat"
                >
                    <img
                        class="inset-0 w-full h-full object-cover"
                        src="/images/websenses.png"
                        alt="WebSenses"
                    />

                    <!-- Tags: VISIBLE ALWAYS -->
                    <div
                        class="absolute bottom-3 left-0 right-0 flex flex-wrap justify-center gap-2 px-3"
                    >
                        <span
                            v-for="tag in [
                                'Website',
                                'LMS',
                                'Payments',
                                'Coaching',
                            ]"
                            :key="tag"
                            class="bg-blue-400/90 text-white rounded-full py-0.5 px-4 text-sm font-medium backdrop-blur-sm"
                        >
                            {{ tag }}
                        </span>
                    </div>

                    <!-- Overlay -->
                    <div
                        class="absolute inset-0 z-10 flex flex-col justify-center items-center p-3 bg-stone-900/0 hover:bg-stone-900/80 transition-all duration-300 group"
                    >
                        <img
                            src="/images/websenses-fi.png"
                            alt="WebSenses"
                            class="w-16 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        <h3
                            class="text-2xl font-semibold bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center"
                        >
                            WebSenses
                        </h3>
                        <p
                            class="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2"
                        >
                            Online learning platform, learn to understand
                            frontend development.
                        </p>
                        <a
                            href="https://www.websenses.co.za"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center gap-1 text-emerald-500 cursor-pointer underline text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3"
                        >
                            <Icon icon="mdi:link-variant" class="size-4.5" />
                            Visit www.websenses.co.za
                        </a>
                    </div>
                </section>

                <!-- Smaller cards column -->
                <section class="flex flex-col w-[24%] h-full gap-1">
                    <!-- Card 1: CodeSpace -->
                    <div
                        class="relative w-full p-0.5 rounded-sm h-1/3 overflow-hidden bg-[image:var(--background-image-gradient-border)] bg-no-repeat"
                    >
                        <img
                            class="w-full h-full object-cover"
                            src="/images/codespace.png"
                            alt="CodeSpace"
                        />

                        <!-- Tags: smaller -->
                        <div
                            class="absolute bottom-1.5 left-0 right-0 flex flex-wrap justify-center gap-1 px-2"
                        >
                            <span
                                v-for="tag in ['Website', 'Maintainence']"
                                :key="tag"
                                class="bg-blue-400/90 text-white rounded-full py-0.5 px-2 text-xs font-medium backdrop-blur-sm"
                            >
                                {{ tag }}
                            </span>
                        </div>

                        <!-- Overlay -->
                        <div
                            class="absolute inset-0 z-10 flex flex-col justify-center items-center p-2 bg-stone-900/0 hover:bg-stone-900/80 transition-all duration-300 group"
                        >
                            <img
                                src="/images/codespace-fi.png"
                                alt="CodeSpace"
                                class="w-8 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            <h3
                                class="text-lg font-semibold bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center"
                            >
                                CodeSpace
                            </h3>
                            <span
                                class="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1"
                            >
                                Website Redesign and Maintenance
                            </span>
                            <a
                                href="https://www.codespace.co.za"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-1 text-emerald-500 cursor-pointer underline text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2"
                            >
                                <Icon
                                    icon="mdi:link-variant"
                                    class="size-3.5"
                                />
                                Visit www.codespace.co.za
                            </a>
                        </div>
                    </div>

                    <!-- Card 2: MiniUMP -->
                    <div
                        class="relative w-full p-0.5 rounded-sm h-1/3 overflow-hidden bg-[image:var(--background-image-gradient-border)] bg-no-repeat"
                    >
                        <img
                            class="w-full h-full object-cover"
                            src="/images/miniump.png"
                            alt="MiniUMP"
                        />

                        <!-- Tags: smaller -->
                        <div
                            class="absolute bottom-1.5 left-0 right-0 flex flex-wrap justify-center gap-1 px-2"
                        >
                            <span
                                v-for="tag in ['App', 'Algorithm', 'SASS']"
                                :key="tag"
                                class="bg-blue-400/90 text-white rounded-full py-0.5 px-2 text-xs font-medium backdrop-blur-sm"
                            >
                                {{ tag }}
                            </span>
                        </div>

                        <!-- Overlay -->
                        <div
                            class="absolute inset-0 z-10 flex flex-col justify-center items-center p-2 bg-stone-900/0 hover:bg-stone-900/80 transition-all duration-300 group"
                        >
                            <img
                                src="/images/miniump-fi.svg"
                                alt="MiniUMP"
                                class="w-7 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            <h3
                                class="text-lg font-semibold bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center"
                            >
                                MiniUMP
                            </h3>
                            <span
                                class="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1"
                            >
                                Match-Making & Score Keeping
                            </span>
                            <!-- <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-1 text-emerald-500 cursor-pointer underline text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2"
                            >
                                <Icon icon="mdi:link-variant" class="size-3.5" />
                                Visit
                            </a> -->
                        </div>
                    </div>

                    <!-- Card 3: Cbazil -->
                    <div
                        class="relative w-full p-0.5 rounded-sm h-1/3 overflow-hidden bg-[image:var(--background-image-gradient-border)] bg-no-repeat"
                    >
                        <img
                            class="w-full h-full object-cover"
                            src="/images/cbazil.png"
                            alt="Cbazil OG"
                        />

                        <!-- Tags: smaller -->
                        <div
                            class="absolute bottom-1.5 left-0 right-0 flex flex-wrap justify-center gap-1 px-2"
                        >
                            <span
                                v-for="tag in ['App', 'Portfolio']"
                                :key="tag"
                                class="bg-blue-400/90 text-white rounded-full py-0.5 px-2 text-xs font-medium backdrop-blur-sm"
                            >
                                {{ tag }}
                            </span>
                        </div>

                        <!-- Overlay -->
                        <div
                            class="absolute inset-0 z-10 flex flex-col justify-center items-center p-2 bg-stone-900/0 hover:bg-stone-900/80 transition-all duration-300 group"
                        >
                            <img
                                src="/images/cbazil-fi.png"
                                alt="Cbazil"
                                class="w-7 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            <h3
                                class="text-lg font-semibold bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center"
                            >
                                Cbazil
                            </h3>
                            <span
                                class="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1"
                            >
                                Legacy Portfolio Site (Older projects)
                            </span>
                            <a
                                href="https://cbazil.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-1 text-emerald-500 cursor-pointer underline text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2"
                            >
                                <Icon
                                    icon="mdi:link-variant"
                                    class="size-3.5"
                                />
                                Visit cbazil.vercel.app
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </article>
        <article v-if="control.selectedOption === 'Micro'"></article>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { useControlStore } from "@/stores/main.js";
const control = useControlStore();

onMounted(() => {
    control.selectedOption = "Featured";
});

onUnmounted(() => {
    control.selectedOption = undefined;
});
</script>
