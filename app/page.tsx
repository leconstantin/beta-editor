"use client";

import { useState } from "react";
import { ModeSwitcher } from "@/components/custom/theme-switcher";
import { CustomEditor } from "@/components/tiptap/custom";

type Mode = "edit" | "preview";

export default function Page() {
  const [content, setContent] = useState<string>("");
  const [mode, setMode] = useState<Mode>("edit");

  return (
    <div className="relative mx-auto my-20 max-w-xl">
      {/* Mode toggle */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex w-fit items-center gap-1 rounded-lg border bg-muted p-1">
          <button
            className={`rounded-md px-4 py-1.5 font-medium text-sm transition-colors ${
              mode === "edit"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setMode("edit")}
            type="button"
          >
            Edit
          </button>
          <button
            className={`rounded-md px-4 py-1.5 font-medium text-sm transition-colors ${
              mode === "preview"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setMode("preview")}
            type="button"
          >
            Preview
          </button>
        </div>
        <ModeSwitcher />
      </div>

      {/* Editor / Preview panel */}
      <div className="max-h-[70vh] overflow-y-auto rounded-lg border">
        <CustomEditor
          editable={mode === "edit"}
          onChange={setContent}
          value={content}
        />
      </div>
    </div>
  );
}
