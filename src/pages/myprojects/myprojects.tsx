/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Typography } from "@material-tailwind/react";
import ProjectCard from "../../components/ProjectCard";
import { PlusIcon } from "@heroicons/react/24/outline";
import NewProjectModal from "../../components/NewProjectModal";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { tokenAtom } from "../../state/auth";
import {
  getAllLessons,
  getAllProjects,
  newLesson,
  newProject,
} from "../../api/project";
import { AxiosError } from "axios";
import NewLessonModal from "../../components/NewLessonModal";

function MyProjects() {
  const tokens = useRecoilValue(tokenAtom);
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const [openNewLesson, setNewLessonOpen] = useState<boolean>(false);

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

  const lessonDataQuery = useQuery("lessons", {
    queryFn: getAllLessons.bind(null, tokens),
    retry: (_, err) => {
      if (err instanceof AxiosError && err.response?.status == 403) {
        navigate("/login", { replace: true });
        return false;
      }

      return true;
    },
  });

  const lessonData =
    lessonDataQuery.data?.result?.map((c: any) => {
      return {
        name: c.name,
        description: c.desc,
        image: "",
        id: c._id,
        variant: c.variant,
        lesson: c.lesson,
      };
    }) || [];

  const saveMutation = useMutation({
    mutationFn: (json: any) => newProject(tokens, json),
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

  const newLessonMutation = useMutation({
    mutationFn: (json: any) => newLesson(tokens, json),
    onSuccess: async (res) => {
      await qc.invalidateQueries("lesson");
      const id = res.data._id;
      navigate("/lesson-creator/" + id);
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

  const onClickNewLesson = (variant: string, name: string) => {
    qc.invalidateQueries("lesson");
    newLessonMutation.mutate({
      name,
      variant: variant,
      desc: `New ${variant} lesson`,
      saveData: {},
    });
  };

  return (
    <div>
      <div className="h-10 w-full"></div>
      <div className="px-10">
        <div className="flex justify-between px-16 pb-4">
          <Typography variant="h1">My Projects</Typography>
          <div className="flex gap-4">
            <Button
              onClick={() => setOpen(true)}
              className="h-12 flex gap-3 justify-center items-center"
            >
              <PlusIcon className="h-6 w-6" /> New Project
            </Button>
            <Button
              onClick={() => setNewLessonOpen(true)}
              className="h-12 flex gap-3 justify-center items-center"
            >
              <PlusIcon className="h-6 w-6" /> Create Lesson
            </Button>
            <Link to="/get-started">
              <Button className="h-12 flex gap-3 justify-center items-center">
                Documentation
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-row flex-wrap px-10 pt-4 gap-8">
          {projectData.map((project: any) => (
            <ProjectCard {...project} />
          ))}
        </div>
        <div className="flex justify-between px-16 pb-4 pt-10">
          <Typography variant="h1">My Lessons</Typography>
        </div>
        <div className="flex flex-row flex-wrap px-10 pt-4 gap-8">
          {lessonData.map((project: any) => (
            <ProjectCard {...project} />
          ))}
        </div>
      </div>
      <NewProjectModal
        open={open}
        handler={() => setOpen(false)}
        onClick={onClickNewProject}
      />
      <NewLessonModal
        open={openNewLesson}
        handler={() => setNewLessonOpen(false)}
        onClick={onClickNewLesson}
      />
    </div>
  );
}

export default MyProjects;
