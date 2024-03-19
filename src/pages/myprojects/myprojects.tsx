/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Typography } from "@material-tailwind/react";
import ProjectCard from "../../components/ProjectCard";
import { PlusIcon } from "@heroicons/react/24/outline";
import NewProjectModal from "../../components/NewProjectModal";
import { useState, useEffect } from "react";
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
import { FaArrowUp } from "react-icons/fa";
import { AwesomeButton } from 'react-awesome-button'; 

function MyProjects() {
  const tokens = useRecoilValue(tokenAtom);
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const [openNewLesson, setNewLessonOpen] = useState<boolean>(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
        <div className="flex justify-between px-16 pb-4 style={{ flexGrow: 1 }}">
          <Typography variant="h1">My Projects</Typography>
          <div className="flex gap-4 justify-end">

            <AwesomeButton
              style={{
                '--button-primary-color': '#E35335',
                '--button-primary-color-dark': '#8B4000',
                '--button-primary-color-light': '#ffffff',
                '--button-primary-color-hover': '#E35335',
                '--button-primary-color-active': '#FF4433',
                '--button-default-border-radius': '8px',
                width: '145px',
                height: '50px',
                //marginRight: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onPress={() => setOpen(true)}
              className="h-12 flex gap-3 justify-center items-center"
              type="primary"
            >
              <PlusIcon className="h-6 w-6" /> New Project
            </AwesomeButton>

            <AwesomeButton
              style={{
                '--button-primary-color': '#33cc33',
                '--button-primary-color-dark': '#18a418',
                '--button-primary-color-light': '#ffffff',
                '--button-primary-color-hover': '#33cc33',
                '--button-primary-color-active': '#1aa81a',
                '--button-default-border-radius': '8px',
                width: '155px',
                height: '50px',
                //marginRight: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onPress={() => setNewLessonOpen(true)}
              className="h-12 flex gap-3 justify-center items-center"
              type="primary"
            >
              <PlusIcon className="h-6 w-6" /> Create Lesson
            </AwesomeButton>

            <AwesomeButton
              style={{
                '--button-primary-color': '#42A5F5',
                '--button-primary-color-dark': '#2d82c7',
                '--button-primary-color-light': '#ffffff',
                '--button-primary-color-hover': '#62b4f8',
                '--button-primary-color-active': '#2d82c7',
                '--button-default-border-radius': '8px',
                width: '145px',
                height: '50px',
                //marginRight: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              href={'/get-started'}
              className="h-12 flex gap-3 justify-center items-center"
              type="primary"
            >
               Documentation
            </AwesomeButton>

            <AwesomeButton
              style={{
                '--button-primary-color': '#FFA726',
                '--button-primary-color-dark': '#e29520',
                '--button-primary-color-light': '#ffffff',
                '--button-primary-color-hover': '#ffb03a',
                '--button-primary-color-active': '#e29520',
                '--button-default-border-radius': '8px',
                width: '90px',
                height: '50px',
                //marginRight: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              href={'/login'}
              className="h-12 flex gap-3 justify-center items-center"
              type="primary"
            >
              Logout
            </AwesomeButton>
            
          </div>
        </div>
        <div className="flex flex-row flex-wrap px-10 pt-4 gap-8">
          {projectData.map((project: any) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div> <br/><br/><hr style={{ border: '2px solid #353935', margin: '20px 0' }} />
        <div className="flex justify-between px-16 pb-4 pt-10">
          <Typography variant="h1">My Lessons</Typography>
        </div>
        <div className="flex flex-row flex-wrap px-10 pt-4 gap-8">
          {lessonData.map((project: any) => (
            <ProjectCard key={project.id} {...project} />
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
      {showScroll && (
        <div
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            cursor: "pointer",
            backgroundColor: "#FFBF00",
            color: "white",
            padding: "10px",
            borderRadius: "50%",
          }}
        >
          <FaArrowUp size={20} />
        </div>
      )}
    </div>
  );
}

export default MyProjects;
