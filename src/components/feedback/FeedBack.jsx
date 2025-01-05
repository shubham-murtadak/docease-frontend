import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { dataContext } from "@/provider/DataProvider";
import { useContext } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import toast from "react-hot-toast";

function FeedBack({ id }) {
  const { handleComments } = useContext(dataContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const textarea = form.textarea.value;
    handleComments(textarea, id);
    toast.success("Thank you for your feedback!");
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Card className="shadow-none border-blue-600 mt-10">
        <CardHeader>
          <CardTitle className="text-2xl">
            Share Your <span className="text-blue-600">Valuable Feedback!</span>
          </CardTitle>
          <CardDescription>
            We value your thoughts! Leave a comment or share your experience
            about this service. Your feedback helps us improve and serve you
            better.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full gap-2">
            <Textarea
              name="textarea"
              className="h-24"
              placeholder="Write your comment here."
            />
            <Button className="w-fit mt-3">Send Feedback</Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}

export default FeedBack;
