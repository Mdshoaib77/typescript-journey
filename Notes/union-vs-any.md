
<pre class="overflow-visible! px-0!" data-start="236" data-end="591"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span>## 🟡 1. UNION TYPE ( | )</span><br/><br/><span>### 🇬🇧 English Explanation</span><br/><br/><span>👉 Union type means:</span><br/><span>A variable can hold **more than one type**, but only the allowed ones.</span><br/><br/><span>You use `|` (pipe symbol).</span><br/><br/><span>---</span><br/><br/><span>### ✅ Example</span><br/><br/><span>```ts</span><br/><span>let id: string | number;</span><br/><br/><span>id = "ABC123";  // OK</span><br/><span>id = 101;       // OK</span><br/><span>id = true;      // ❌ Error</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

### 🧠 Meaning

👉 `id` can be:

* string
* number

But NOT anything else.

---

### 💡 Real-life Example

<pre class="overflow-visible! px-0!" data-start="704" data-end="784"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">let</span><span></span><span class="ͼe">userInput</span><span>: </span><span class="ͼe">string</span><span></span><span class="ͼ8">|</span><span></span><span class="ͼe">number</span><span>;</span><br/><br/><span class="ͼe">userInput</span><span></span><span class="ͼ8">=</span><span></span><span class="ͼc">"Shoaib"</span><span>;</span><br/><span class="ͼe">userInput</span><span></span><span class="ͼ8">=</span><span></span><span class="ͼb">25</span><span>;</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

👉 Useful when:

* form input
* API response
* flexible data handling

---

---

## 🔴 2. ANY TYPE

### 🇬🇧 English Explanation

👉 `any` means:

A variable can store **anything without type checking**

TypeScript becomes like JavaScript.

---

### ❌ Example

<pre class="overflow-visible! px-0!" data-start="1045" data-end="1138"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">let</span><span></span><span class="ͼe">data</span><span>: </span><span class="ͼe">any</span><span>;</span><br/><br/><span class="ͼe">data</span><span></span><span class="ͼ8">=</span><span></span><span class="ͼc">"Hello"</span><span>;</span><br/><span class="ͼe">data</span><span></span><span class="ͼ8">=</span><span></span><span class="ͼb">100</span><span>;</span><br/><span class="ͼe">data</span><span></span><span class="ͼ8">=</span><span></span><span class="ͼb">true</span><span>;</span><br/><span class="ͼe">data</span><span></span><span class="ͼ8">=</span><span> { name: </span><span class="ͼc">"Shoaib"</span><span> };</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

👉 Everything allowed ❗

---

### ⚠️ Problem

<pre class="overflow-visible! px-0!" data-start="1186" data-end="1283"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">let</span><span></span><span class="ͼe">value</span><span>: </span><span class="ͼe">any</span><span></span><span class="ͼ8">=</span><span></span><span class="ͼc">"Hello"</span><span>;</span><br/><br/><span class="ͼe">value</span><span class="ͼ8">.</span><span>toFixed(); </span><br/><span class="ͼ6">// ❌ No TypeScript error but runtime error</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

### 🧠 Meaning

👉 `any` = no type safety ❌

👉 TypeScript stops checking completely



## Another Version



<pre class="overflow-visible! px-0!" data-start="261" data-end="821"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span># 🧠 TypeScript: `any` vs Union Type (`|`)</span><br/><br/><span>---</span><br/><br/><span>## 🔴 1. The `any` Type (The "I don't care" approach)</span><br/><br/><span>👉 When you use `any`, you are basically telling TypeScript to **turn off type checking**.</span><br/><br/><span>You can assign any type of value to the variable, but it removes type safety.</span><br/><br/><span>⚠️ This is dangerous because you lose the "safety net" of TypeScript.</span><br/><br/><span>---</span><br/><br/><span>### ❌ Example</span><br/><br/><span>```ts</span><br/><span>let value: any = "Hello";</span><br/><br/><span>value = 42;          // No error</span><br/><span>value.toUpperCase(); // No error at compile time</span><br/><br/><span>// ⚠️ But if value is a number, this will crash at runtime!</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

### 🧠 Meaning

👉 `any` means:

* No type checking
* No safety
* Works like JavaScript

---

---

## 🟡 2. The Union Type (The "Controlled" approach)

👉 A Union type allows a variable to be  **one of several specific types** .

You use the `|` (pipe) symbol.

It provides flexibility  **while keeping type safety** .

---

### ✅ Example

<pre class="overflow-visible! px-0!" data-start="1163" data-end="1297"><div class="relative w-full mt-4 mb-1"><div class=""><div class="relative"><div class="h-full min-h-0 min-w-0"><div class="h-full min-h-0 min-w-0"><div class="border border-token-border-light border-radius-3xl corner-superellipse/1.1 rounded-3xl"><div class="h-full w-full border-radius-3xl bg-token-bg-elevated-secondary corner-superellipse/1.1 overflow-clip rounded-3xl lxnfua_clipPathFallback"><div class="pointer-events-none absolute inset-x-4 top-12 bottom-4"><div class="pointer-events-none sticky z-40 shrink-0 z-1!"><div class="sticky bg-token-border-light"></div></div></div><div class="relative"><div class=""><div class="relative z-0 flex max-w-full"><div id="code-block-viewer" dir="ltr" class="q9tKkq_viewer cm-editor z-10 light:cm-light dark:cm-light flex h-full w-full flex-col items-stretch ͼ5 ͼj"><div class="cm-scroller"><div class="cm-content q9tKkq_readonly"><span class="ͼ8">let</span><span></span><span class="ͼe">id</span><span>: </span><span class="ͼe">string</span><span></span><span class="ͼ8">|</span><span></span><span class="ͼe">number</span><span>;</span><br/><br/><span class="ͼe">id</span><span></span><span class="ͼ8">=</span><span></span><span class="ͼb">101</span><span>;      </span><span class="ͼ6">// Valid</span><br/><span class="ͼe">id</span><span></span><span class="ͼ8">=</span><span></span><span class="ͼc">"A-202"</span><span>;  </span><span class="ͼ6">// Valid</span><br/><br/><span class="ͼ6">// id = true;  // ❌ Error! Boolean is not allowed</span></div></div></div></div></div></div></div></div></div></div><div class=""><div class=""></div></div></div></div></div></pre>

---

### 🧠 Meaning

👉 `id` can be:

* string
* number

But NOT anything else.

---

---

## ⚖️ Comparison Table

| Feature | any | Union (|) |

|--------|-----|-----------|

| Safety | Very Low (allows everything) | High (only allows specified types) |

| Autocompletion | No (IDE doesn't know type) | Yes (IDE helps with suggestions) |

| Type Checking | Disabled | Enabled |

| Best Use Case | Migrating old JS to TS | When value can be 2–3 specific types |
