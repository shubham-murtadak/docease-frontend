import userPhoto from "@/assets/default-user.png";
import { AuthContext } from "@/provider/AuthProvider";
import { dataContext } from "@/provider/DataProvider";
import { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

function Comments({ id }) {
  const { user } = useContext(AuthContext);
  const { comments } = useContext(dataContext);
  const filtered = comments.filter((c) => c.id === id);
  return (
    <Card className="shadow-none rounded-none border-y-2 border-dashed mt-10">
      <CardHeader>
        <CardTitle className="text-xl">
          Your Comments ({filtered.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-3">
          {filtered.map((comment, i) => (
            <li key={i} className="border-b border-dashed pb-4">
              <div className="flex items-center gap-3">
                <img
                  className="w-10 object-cover h-10 rounded-full"
                  src={user?.photoURL || userPhoto}
                  alt=""
                />
                <div>
                  <h4 className="text-base font-medium">{comment.comment}</h4>
                  <p className="text-sm text-muted-foreground/80">
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default Comments;
