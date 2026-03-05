import type { RootState, AppDispatch } from "../../redux/store";

import Task from "./Task";
import type { TaskData } from "./Task";

import { useDispatch, useSelector } from "react-redux";

import { updateTaskState } from "../../redux/TaskSlice";

import { Card, Spin, Empty, Flex } from "antd";

export default function TaskList() {

    const tasks = useSelector((state: RootState) => {
        const tasksInOrder = [
            ...state.taskbox.tasks.filter((t: TaskData) => t.state === "TASK_PINNED"),
            ...state.taskbox.tasks.filter((t: TaskData) => t.state !== "TASK_PINNED"),
        ];

        const filteredTasks = tasksInOrder.filter(
            (t) => t.state === "TASK_INBOX" || t.state === "TASK_PINNED"
        );

        return filteredTasks;
    });

    const { status } = useSelector((state: RootState) => state.taskbox);

    const dispatch = useDispatch<AppDispatch>();

    const pinTask = (value: string) => {
        dispatch(updateTaskState({ id: value, newTaskState: "TASK_PINNED" }));
    };

    const archiveTask = (value: string) => {
        dispatch(updateTaskState({ id: value, newTaskState: "TASK_ARCHIVED" }));
    };

    if (status === "loading") {
        return (
            <Card style={{ width: 400 }}>
                <Spin tip="Loading tasks..." />
            </Card>
        );
    }

    if (tasks.length === 0) {
        return (
            <Card style={{ width: 400 }}>
                <Empty
                    description="You have no tasks"
                />
            </Card>
        );
    }

    return (
        <Card title="Task List" style={{ width: 400 }}>
            <Flex vertical gap="small">
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onPinTask={pinTask}
                        onArchiveTask={archiveTask}
                    />
                ))}
            </Flex>
        </Card>
    );
}