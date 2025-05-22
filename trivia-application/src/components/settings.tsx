import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export type QuizSettings = {
  name: string;
  amount: number;
  category: string;
  difficulty: string;
  type: string;
};

type Props = {
  onSubmit: (data: QuizSettings) => void;
};

const fetchCategories = async () => {
  const res = await fetch("https://opentdb.com/api_category.php");
  const data = await res.json();
  return data.trivia_categories;
};

const SettingsForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<QuizSettings>({
    defaultValues: {
      name: "Anonymous",
      amount: 10,
      category: "",
      difficulty: "any",
      type: "any",
    },
  });

  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  useEffect(() => {
    setValue("category", "");
  }, [setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}
    className="max-w-mx mx-auto p-6 bg-white rounded-lg shadow space-y-4">
      <div className=" flex flex-col">
        <label className="font-medium">Name:</label>
        <input {...register("name")} className="border rounded px-3 py-2 mt-1"/>
      </div>

      <div className="flex flex-col">
        <label className="font-medium">Amount:</label>
        <input type="number" {...register("amount", { valueAsNumber: true })}className="border rounded px-3 py-2 mt-1" />
      </div>

      <div className="flex flex-col">
        <label className="font-medium">Category:</label>
        <select {...register("category")}
        className="border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Any Category</option>
          {!isLoading &&
            categories?.map((cat: any) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="font-medium">Difficulty:</label>
        <select {...register("difficulty")}
         className="border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="any">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="font-medium">Type:</label>
        <select {...register("type")}
        className="border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="any">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True/False</option>
        </select>
      </div>

      <button
      type="submit"
      disabled={isSubmitting}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Start Quiz
    </button>
    </form>
  );
};

export default SettingsForm;
