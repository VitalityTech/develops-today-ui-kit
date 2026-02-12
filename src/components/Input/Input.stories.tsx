import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";
import { useState } from "react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "number"],
    },
  },
};

type Story = StoryObj<typeof Input>;

// Стандартний стан
export const Default: Story = {
  args: {
    placeholder: "Введіть текст...",
    label: "Логін",
  },
};

// Пароль з перемикачем (Toggle)
export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Ваш пароль",
    label: "Пароль",
  },
};

// Інтерактивний приклад з очищенням
export const InteractiveClearable: Story = {
  render: (args) => {
    const [value, setValue] = useState("Це можна стерти");
    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        clearable
        label="Поле з кнопкою очищення"
      />
    );
  },
};

export default meta;
