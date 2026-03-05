import { Checkbox, Input, Button, Space } from "antd";

export type TaskData = {
  id: string;
  title: string;
  state: "TASK_ARCHIVED" | "TASK_INBOX" | "TASK_PINNED";
};

type TaskProps = {
  task: TaskData;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
};

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: TaskProps) {
  return (
    <Space
      style={{
        width: "100%",
        padding: "8px",
        border: "1px solid #f0f0f0",
        borderRadius: "6px",
      }}
      align="center"
    >
      <Checkbox
        checked={state === "TASK_ARCHIVED"}
        onChange={() => onArchiveTask(id)}
      />

      <Input
        value={title}
        readOnly
        placeholder="Input title"
        style={{ width: "200px" }}
      />

      {state !== "TASK_ARCHIVED" && (
        <Button type={state === "TASK_PINNED" ? "primary" : "default"} onClick={() => onPinTask(id)}>
          Pin
        </Button>
      )}
    </Space>
  );
}