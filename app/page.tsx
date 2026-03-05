"use client";

import { EyeIcon, PencilIcon } from "lucide-react";
import { useState } from "react";
import { ModeSwitcher } from "@/components/custom/theme-switcher";
import { CustomEditor } from "@/components/tiptap/custom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Page() {
  const [content, setContent] = useState<string>("");

  return (
    <div className="relative mx-auto my-20 max-w-xl">
      {/* Mode toggle */}

      <Tabs defaultValue="edit">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="edit">
              <PencilIcon />
              Edit
            </TabsTrigger>
            <TabsTrigger value="preview">
              <EyeIcon />
              Preview
            </TabsTrigger>
          </TabsList>
          <ModeSwitcher />
        </div>
        <TabsContent value="edit">
          <div className="no-scrollbar max-h-[70vh] overflow-y-auto rounded-lg border">
            <CustomEditor
              editable={true}
              onChange={setContent}
              value={content}
            />
          </div>
        </TabsContent>
        <TabsContent value="preview">
          <div className="no-scrollbar max-h-[70vh] overflow-y-auto rounded-lg border">
            <CustomEditor editable={false} value={content} />
          </div>
        </TabsContent>
      </Tabs>

      {/* Editor / Preview panel */}
    </div>
  );
}
