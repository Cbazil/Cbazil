<template>
    <transition name="contact-overlay">
        <div
            v-if="control.contactOpen"
            class="fixed inset-0 z-[99999] text-white px-4 lg:px-32 2xl:px-58 flex flex-col h-[100dvh]"
            style="background: rgba(0, 0, 0, 0.92)"
        >
            <!-- Close button — desktop -->
            <div
                class="hidden md:flex items-center gap-1 absolute top-13.5 left-4 lg:left-32 2xl:right-58"
            >
                <button
                    @click="control.contactOpen = false"
                    @mouseover="hovering = 'esc'"
                    @mouseleave="hovering = null"
                    class="flex shrink-0 items-center justify-center h-7 px-1 rounded-sm text-stone-900 cursor-pointer bg-gradient-to-tr from-blue-900 via-sky-200 to-white transition-all duration-300 hover:from-emerald-500 hover:via-emerald-500 hover:to-emerald-500"
                >
                    <span class="font-normal">ESC</span>
                </button>
                <span
                    class="leading-none whitespace-nowrap transition-colors duration-300"
                    :class="{ 'text-emerald-500': hovering === 'esc' }"
                >
                    BACK
                </span>
            </div>

            <!-- Close button — mobile -->
            <button
                class="md:hidden fixed top-5 right-4 text-red-500 text-2xl p-2 z-20 leading-none"
                @click="control.contactOpen = false"
            >
                ✕
            </button>

            <div class="h-[77dvh] flex flex-col items-center justify-end mt-24">
                <article
                    ref="conversationRef"
                    class="w-full md:w-3/4 flex flex-col gap-2 mb-3 overflow-y-auto max-h-[77dvh]"
                >
                    <!-- Email input — only when type is email, above left -->
                    <div
                        v-if="type === 'email' && !conversation.length"
                        class="w-fit"
                    >
                        <input
                            v-model="senderEmail"
                            type="email"
                            placeholder="Your email address..."
                            :class="[
                                'mx-2 outline-none bg-transparent text-sm text-white placeholder:text-stone-400 transition-colors duration-200',
                                emailError ? 'border-b border-red-500' : '',
                            ]"
                        />
                        <span
                            v-if="emailError"
                            class="text-red-500 text-sm mx-2 mt-1 block"
                            >{{ emailError }}</span
                        >
                    </div>

                    <!-- Questions list -->
                    <template v-if="!conversation.length">
                        <div
                            v-if="type === 'findout'"
                            v-for="q in questions"
                            :key="q"
                            @click="typeQuestion(q)"
                            class="w-fit"
                        >
                            <div
                                v-if="activeQuestion !== q"
                                class="p-[1px] rounded-lg bg-gradient-to-tr from-blue-900 via-sky-200 to-white cursor-pointer hover:opacity-70 transition-opacity duration-200"
                            >
                                <div class="px-3 py-2 rounded-lg bg-black/92">
                                    <span
                                        class="text-sm bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
                                        >{{ q }}</span
                                    >
                                </div>
                            </div>
                        </div>
                    </template>

                    <!-- Chat section -->
                    <template v-else>
                        <div class="flex flex-col gap-3 w-full">
                            <div
                                v-for="(entry, i) in conversation"
                                :key="i"
                                class="flex flex-col gap-1"
                            >
                                <!-- Question bubble (right) — only for findout -->
                                <div
                                    v-if="entry.question"
                                    class="flex justify-end"
                                >
                                    <span
                                        class="h1 font-normal px-3 py-1.5 rounded-lg bg-emerald-500 text-stone-900 text-sm font-medium max-w-[80%] break-words overflow-hidden"
                                    >
                                        {{ entry.question }}
                                    </span>
                                </div>
                                <!-- Response bubble (left) -->
                                <div class="flex justify-start">
                                    <span
                                        class="h1 font-normal px-3 py-1.5 rounded-lg bg-gradient-to-tr from-blue-900 via-sky-200 to-white text-stone-900 text-sm font-medium max-w-[80%] break-words overflow-hidden"
                                    >
                                        {{ entry.response ?? "..." }}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- Reset button -->
                        <div class="flex justify-end mt-1">
                            <div
                                class="p-[1px] rounded-lg bg-gradient-to-tr from-blue-900 via-sky-200 to-white cursor-pointer hover:opacity-70 transition-opacity duration-200"
                                @click="reset"
                            >
                                <div
                                    class="px-2 py-2 rounded-lg bg-black/92 flex items-center gap-1.5"
                                >
                                    <span
                                        class="block size-5 bg-gradient-to-tr from-blue-900 via-sky-200 to-white"
                                        :style="{
                                            mask: `url('https://api.iconify.design/mdi:circle-arrows.svg') center/contain no-repeat`,
                                            WebkitMask: `url('https://api.iconify.design/mdi:circle-arrows.svg') center/contain no-repeat`,
                                        }"
                                    />
                                </div>
                            </div>
                        </div>
                    </template>
                </article>

                <article class="w-full md:w-3/4 p-3 rounded-lg bg-stone-800">
                    <!-- Hidden download anchor -->
                    <a ref="downloadRef" class="hidden" />

                    <textarea
                        rows="2"
                        :class="[
                            'w-full h-10 outline-none bg-transparent text-white resize-none placeholder:text-stone-400 transition-colors duration-200',
                            messageError ? 'border-b border-red-500' : '',
                        ]"
                        :placeholder="placeholder"
                        v-model="message"
                    />
                    <span
                        v-if="messageError"
                        class="text-red-500 text-sm block mb-2"
                        >{{ messageError }}</span
                    >

                    <section class="w-full flex flex-row justify-between mt-3">
                        <div class="flex items-center gap-2">
                            <!-- Select 1 -->
                            <div
                                class="p-[1px] rounded-lg bg-gradient-to-tr from-blue-900 via-sky-200 to-white"
                            >
                                <div
                                    class="h-8 px-2 rounded-lg bg-stone-800 flex items-center"
                                >
                                    <select
                                        v-model="type"
                                        class="text-sm font-medium cursor-pointer border-0 outline-none appearance-none bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
                                    >
                                        <option value="findout">
                                            Find out
                                        </option>
                                        <option value="email">Email</option>
                                        <option value="resume">Resume</option>
                                    </select>
                                </div>
                            </div>

                            <!-- Select 2 -->
                            <div
                                v-if="type === 'email' || type === 'resume'"
                                class="p-[1px] rounded-lg bg-gradient-to-tr from-blue-900 via-sky-200 to-white"
                            >
                                <div
                                    class="h-8 px-2 rounded-lg bg-stone-800 flex items-center"
                                >
                                    <select
                                        v-model="subject"
                                        class="text-sm font-medium cursor-pointer border-0 outline-none appearance-none bg-gradient-to-tr from-blue-900 via-sky-200 to-white bg-clip-text text-transparent"
                                    >
                                        <template v-if="type === 'email'">
                                            <option value="general">
                                                General Enquiry
                                            </option>
                                            <option value="coaching">
                                                Get Coaching
                                            </option>
                                            <option value="freelance">
                                                Get Quote
                                            </option>
                                        </template>
                                        <template v-else>
                                            <option value="onepager">
                                                One pager
                                            </option>
                                            <option value="complete">
                                                Complete
                                            </option>
                                        </template>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <!-- Button -->
                        <div
                            class="p-[1px] rounded-lg bg-gradient-to-tr from-blue-900 via-sky-200 to-white transition-all duration-300 hover:from-emerald-500 hover:via-emerald-500 hover:to-emerald-500 group"
                        >
                            <button
                                @click="handleSubmit"
                                class="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer bg-stone-800"
                            >
                                <span
                                    class="hidden md:block size-4 bg-gradient-to-tr from-blue-900 via-sky-200 to-white group-hover:from-emerald-500 group-hover:via-emerald-500 group-hover:to-emerald-500 transition-all duration-300"
                                    :style="{
                                        mask: `url('https://api.iconify.design/${type === 'resume' ? 'line-md:download-loop' : 'streamline:send-email-remix'}.svg') center/contain no-repeat`,
                                        WebkitMask: `url('https://api.iconify.design/${type === 'resume' ? 'line-md:download-loop' : 'streamline:send-email-remix'}.svg') center/contain no-repeat`,
                                    }"
                                />
                                <span
                                    class="block md:hidden size-4 bg-gradient-to-tr from-blue-900 via-sky-200 to-white group-hover:from-emerald-500 group-hover:via-emerald-500 group-hover:to-emerald-500 transition-all duration-300"
                                    :style="{
                                        mask: `url('https://api.iconify.design/${type === 'resume' ? 'line-md:download-loop' : type === 'email' ? 'streamline:send-email-remix' : 'ph:magnifying-glass'}.svg') center/contain no-repeat`,
                                        WebkitMask: `url('https://api.iconify.design/${type === 'resume' ? 'line-md:download-loop' : type === 'email' ? 'streamline:send-email-remix' : 'ph:magnifying-glass'}.svg') center/contain no-repeat`,
                                    }"
                                />
                            </button>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from "vue";
import { useControlStore } from "@/stores/main.js";
import { useLinkover, useBtnClick } from "@/composables/useSound.js";
import {
    socialLinks,
    personalItems,
    professionItems,
    mainTechnologies,
    extraTechnologies,
    softSkills,
    workXP,
    eduXP,
    blogs,
} from "@/lib/data.js";

const control = useControlStore();
const playOver = useLinkover();
const handleClick = useBtnClick();

const hovering = ref(null);
const type = ref("findout");
const subject = ref("general");
const message = ref("");
const senderEmail = ref("");
const activeQuestion = ref(null);
const conversation = ref([]);
const emailError = ref("");
const messageError = ref("");
const loading = ref(false);
const downloadRef = ref(null);
const conversationRef = ref(null);

const questions = [
    "Does he know fullstack?",
    "Can he use MySQL?",
    "Can he use WordPress?",
    "How many years of experience in React?",
    "What are his expertise?",
];

let typingInterval = null;

const handleKeydown = (e) => {
    if (e.key === "Escape") control.contactOpen = false;
};

onMounted(() => window.addEventListener("keydown", handleKeydown));
onUnmounted(() => window.removeEventListener("keydown", handleKeydown));

const scrollToBottom = async () => {
    await nextTick();
    if (conversationRef.value) {
        conversationRef.value.scrollTop = conversationRef.value.scrollHeight;
    }
};

const typeQuestion = (q) => {
    if (typingInterval) clearInterval(typingInterval);
    message.value = "";
    activeQuestion.value = q;
    let i = 0;
    typingInterval = setInterval(() => {
        message.value += q[i];
        i++;
        if (i >= q.length) clearInterval(typingInterval);
    }, 35);
};

const isValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

const validate = () => {
    emailError.value = "";
    messageError.value = "";
    let valid = true;

    if (type.value === "email") {
        if (!senderEmail.value.trim()) {
            emailError.value = "Email address is required.";
            valid = false;
        } else if (!isValidEmail(senderEmail.value)) {
            emailError.value = "Please enter a valid email address.";
            valid = false;
        }
    }

    if (type.value !== "resume" && !message.value.trim()) {
        messageError.value = "Message cannot be empty.";
        valid = false;
    }

    return valid;
};

const handleFindout = async (question) => {
    const context = JSON.stringify({
        socialLinks,
        personalItems,
        professionItems,
        mainTechnologies,
        extraTechnologies,
        softSkills,
        workXP,
        eduXP,
        blogs,
    });

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash-lite:generateContent?key=${import.meta.env.VITE_GEMINI_KEY}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: `You are a helpful assistant for Cbazil's portfolio. His name is Cbazil. Answer questions based only on the data provided, keep answers short, accurate and friendly. Do not make up anything not in the data. If there is any stack that is not in data, paint a picture of him swifting into the space if needed, referencing comparisons.\n\nData:\n${context}\n\nQuestion: ${question}`,
                                },
                            ],
                        },
                    ],
                }),
            },
        );

        const data = await response.json();

        if (data.promptFeedback?.blockReason) {
            return "Response was blocked.";
        }
        if (data.error) {
            return `API error: ${data.error.message}`;
        }
        if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
            return data.candidates[0].content.parts[0].text;
        }

        return "Sorry, I couldn't find an answer for that.";
    } catch (e) {
        return "Something went wrong, please try again.";
    }
};

const getResponse = () => {
    if (type.value === "email") {
        const labels = {
            general: "General Enquiry",
            coaching: "Get Coaching",
            freelance: "Get Quote",
        };
        return `${labels[subject.value]} email sent.`;
    } else if (type.value === "resume") {
        const labels = { onepager: "One pager", complete: "Complete resume" };
        return `${labels[subject.value]} downloaded.`;
    }
};

const handleSubmit = async () => {
    if (!validate()) return;

    if (type.value === "findout") {
        loading.value = true;
        const question = message.value;
        conversation.value.push({ question, response: null });
        scrollToBottom();
        message.value = "";
        activeQuestion.value = null;
        try {
            const response = await handleFindout(question);
            conversation.value[conversation.value.length - 1].response =
                response;
            scrollToBottom();
        } catch (e) {
            conversation.value[conversation.value.length - 1].response =
                "Something went wrong, please try again.";
            scrollToBottom();
        } finally {
            loading.value = false;
        }
    } else if (type.value === "email") {
        if (subject.value === "general") {
            // TODO: send general enquiry email
        } else if (subject.value === "coaching") {
            // TODO: send coaching request email
        } else if (subject.value === "freelance") {
            // TODO: send freelance quote email
        }
        conversation.value.push({ question: null, response: getResponse() });
        scrollToBottom();
        message.value = "";
        senderEmail.value = "";
        activeQuestion.value = null;
    } else if (type.value === "resume") {
        if (subject.value === "onepager") {
            downloadRef.value.href = "/docs/Chad Bosch 1 Pager CV.pdf";
            downloadRef.value.download =
                message.value.trim() || "Chad Bosch 1 Pager CV.pdf";
        } else if (subject.value === "complete") {
            downloadRef.value.href =
                "/docs/Curriculum Vitae of Chad Bosch - complete.pdf";
            downloadRef.value.download =
                message.value.trim() ||
                "Curriculum Vitae of Chad Bosch - complete.pdf";
        }
        downloadRef.value.click();
        conversation.value.push({ question: null, response: getResponse() });
        scrollToBottom();
        message.value = "";
        activeQuestion.value = null;
    }
};

const reset = () => {
    conversation.value = [];
    message.value = "";
    senderEmail.value = "";
    activeQuestion.value = null;
    emailError.value = "";
    messageError.value = "";
    loading.value = false;
};

watch(message, (val) => {
    if (val === "") activeQuestion.value = null;
    if (val.trim()) messageError.value = "";
});

watch(senderEmail, (val) => {
    if (val.trim()) emailError.value = "";
});

watch(type, (val) => {
    subject.value = val === "resume" ? "onepager" : "general";
    emailError.value = "";
    messageError.value = "";
});

const placeholder = computed(() => {
    if (type.value === "findout") {
        return "Ask about Cbazil...";
    } else if (type.value === "resume") {
        return subject.value === "onepager"
            ? "Rename one pager document..."
            : "Rename complete resume...";
    }
    return "Write your message...";
});
</script>

<style scoped>
.contact-overlay-enter-active {
    animation: contact-expand 1.5s forwards;
}
.contact-overlay-leave-active {
    animation: contact-collapse 0.6s forwards;
}

@keyframes contact-expand {
    from {
        clip-path: circle(0% at 14% 7%);
    }
    to {
        clip-path: circle(150% at 14% 7%);
    }
}

@keyframes contact-collapse {
    from {
        clip-path: circle(150% at 14% 7%);
    }
    to {
        clip-path: circle(0% at 14% 7%);
    }
}
</style>
