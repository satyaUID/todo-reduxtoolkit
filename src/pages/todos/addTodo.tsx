import { FC, FormEvent } from "react";
import { useTodoForm } from "../../hooks/useTodoForm";
import Button from "../../components/buttons/button";
import Input from "../../components/form-elements/input";
const AddTodo: FC = () => {
  const {
    formRef,
    deferredTitle,
    deferredDesc,
    setTitle,
    setDesc,
    submitHandler,
  } = useTodoForm();

  return (
    <div>
      <form ref={formRef} onSubmit={submitHandler}>
        <Input
          id="todoTitle"
          label="Title"
          placeholder="Add Todo"
          value={deferredTitle}
          wrapperClass="flex flex-col mb-5"
          labelClass="text-primary-200"
          classes="border border-color-primary !outline-none text-primary-200"
          onInput={(e: FormEvent<HTMLInputElement>) =>
            setTitle((e.target as HTMLInputElement).value)
          }
        />
        <Input
          id="description"
          label="Description"
          placeholder="Add Desc"
          value={deferredDesc}
          labelClass="text-primary-200"
          classes="border border-color-primary !outline-none text-primary-200"
          wrapperClass="flex flex-col mb-5"
          onInput={(e: FormEvent<HTMLInputElement>) =>
            setDesc((e.target as HTMLInputElement).value)
          }
        />
        <Button type="submit" width="width-full">
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddTodo;
