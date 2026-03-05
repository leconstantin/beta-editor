import { CustomEditor } from "@/components/tiptap/custom";

export default function Page() {
  return (
    <div className="relative mx-auto my-20 max-h-[50vh] max-w-xl overflow-y-auto rounded-lg border">
      <CustomEditor />
    </div>
  );
}
