import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { dataContext } from "@/provider/DataProvider";
import { useContext } from "react";

export function SelectService() {
  const { data } = useContext(dataContext);
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a service" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Appoinment</SelectLabel>

          {data.map((d) => (
            <SelectItem key={d.id} value={d.service_name}>
              {d.service_name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
