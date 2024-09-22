import { paths } from "@/layouts/paths";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={paths.panel.operatingHours}>
        <Button variant="contained">Go Operating Hours</Button>
      </Link>
    </div>
  );
}
