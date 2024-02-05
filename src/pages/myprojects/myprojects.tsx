import { Button, Typography } from "@material-tailwind/react";
import ProjectCard from "../../components/ProjectCard";
import { PlusIcon } from "@heroicons/react/24/outline";
import NewProjectModal from "../../components/NewProjectModal";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { httpClient } from "../../helpers/axios";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { tokenAtom } from "../../state/auth";
import { getAllProjects } from "../../api/project";
import APIError from "../../errors/api";
import { AxiosError } from "axios";

function MyProjects() {
  const tokens = useRecoilValue(tokenAtom);
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const qc = useQueryClient();
  const projectDataQuery = useQuery("projects", {
    queryFn: getAllProjects.bind(null, tokens),
    retry: (_, err) => {
      if (err instanceof AxiosError && err.response?.status == 403) {
        navigate("/login", { replace: true });
        return false;
      }

      return true;
    },
  });

  const projectData =
    projectDataQuery.data?.result?.map((c: any) => {
      return {
        name: c.name,
        description: c.desc,
        image: "",
        id: c._id,
        variant: c.variant,
      };
    }) || [];

  const saveMutation = useMutation({
    mutationFn: (json: any) => httpClient.post("project/new", json),
    onSuccess: async (res) => {
      await qc.invalidateQueries("project");
      const id = res.data._id;
      if (res.data.variant == "frontend") {
        navigate("/frontend/" + id);
        return;
      }

      navigate("/backend/" + id);
    },
  });

  const onClickNewProject = (variant: string, name: string) => {
    console.log(variant, name);
    qc.invalidateQueries("project");
    saveMutation.mutate({
      name,
      variant: variant,
      desc: `New ${variant} project`,
      saveData: {},
    });
  };

  return (
    <div>
      <div className="h-10 w-full"></div>
      <div className="px-10">
        <div className="flex justify-between px-16 pb-4">
          <Typography variant="h1">My Projects</Typography>
          <Button
            onClick={() => setOpen(true)}
            className="h-12 flex gap-3 justify-center items-center"
          >
            <PlusIcon className="h-6 w-6" /> New Project
          </Button>
        </div>
        <div className="flex flex-row flex-wrap px-10 pt-4 gap-8">
          {projectData.map((project: any) => (
            <ProjectCard {...project} />
          ))}
        </div>
      </div>
      <NewProjectModal
        open={open}
        handler={() => setOpen(false)}
        onClick={onClickNewProject}
      />
    </div>
  );
}

export default MyProjects;
