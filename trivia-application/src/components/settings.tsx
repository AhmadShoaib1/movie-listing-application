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
    className="max-w-mx mx-atuo p-6 bg-white rounded-lg shadow space-y-4">
      <div>
        <label>Name:</label>
        <input {...register("name")} />
      </div>

      <div className="flex flex-col">
        <label>Amount:</label>
        <input type="number" {...register("amount", { valueAsNumber: true })} />
      </div>

      <div>
        <label>Category:</label>
        <select {...register("category")}>
          <option value="">Any Category</option>
          {!isLoading &&
            categories?.map((cat: any) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
        </select>
      </div>

      <div>
        <label>Difficulty:</label>
        <select {...register("difficulty")}>
          <option value="any">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div>
        <label>Type:</label>
        <select {...register("type")}>
          <option value="any">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True/False</option>
        </select>
      </div>

      <button type="submit" disabled={isSubmitting}>Start Quiz</button>
    </form>
  );
};

export default SettingsForm;
