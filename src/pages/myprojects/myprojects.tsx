/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from "@material-tailwind/react";
import ProjectCard, { ProjectCardProps } from "../../components/ProjectCard";
import { PlusIcon } from "@heroicons/react/24/outline";
import NewProjectModal from "../../components/NewProjectModal";
import { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { tokenAtom } from "../../state/auth";
import {
  deleteLesson,
  deleteProjectById,
  getAllLessons,
  getAllProjects,
  newLesson,
  newProject,
} from "../../api/project";
import { AxiosError } from "axios";
import NewLessonModal from "../../components/NewLessonModal";
import { FaArrowUp } from "react-icons/fa";
import { AwesomeButton } from "react-awesome-button";
import {
  ConfirmDialog,
  ConfirmDialogProps,
} from "../../components/Dialogs/ConfirmDialog";
import TopBar from "../documents/topBar";
import bgImage from '../../assets/home/pattWhite.png'

function MyProjects() {
  const tokens = useRecoilValue(tokenAtom);
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const [openNewLesson, setNewLessonOpen] = useState<boolean>(false);
  const [showScroll, setShowScroll] = useState(false);
  const [openDialog, setOpenDialog] = useState<ConfirmDialogProps>({
    body: <></>,
    onOK: () => {},
    onCancel: () => {},
    open: false,
  });

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
  const projectDataQuery = useQuery("project", {
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

  const [selectedTab, setSelectedTab] = useState("projects");

  const handleTabChange = (tab: any) => {
    setSelectedTab(tab);
  };

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

  const deleteProjectMut = useMutation({
    mutationFn: (params: any) => deleteProjectById(tokens, params ?? ""),
    onSuccess: () => {
      qc.invalidateQueries("project");
    },
  });

  const deleteLessonMut = useMutation({
    mutationFn: (params: any) => deleteLesson(tokens, params ?? ""),
    onSuccess: () => {
      qc.invalidateQueries("lessons");
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

  const deleteProject = (project: ProjectCardProps) => {
    setOpenDialog({
      open: true,
      title: <span className="text-red-500">Delete {project.name}?</span>,
      body: "Are you sure you want to delete " + project.name + "?",
      onCancel: () => {
        setOpenDialog((prev) => ({ ...prev, open: false }));
      },
      onOK() {
        deleteProjectMut.mutate(project.id);
        setOpenDialog((prev) => ({ ...prev, open: false }));
      },
    });
  };

  const _deleteLesson = (project: ProjectCardProps) => {
    setOpenDialog({
      open: true,
      title: <span className="text-red-500">Delete {project.name}?</span>,
      body: "Are you sure you want to delete " + project.name + "?",
      onCancel: () => {
        setOpenDialog((prev) => ({ ...prev, open: false }));
      },
      onOK() {
        deleteLessonMut.mutate(project.id);
        setOpenDialog((prev) => ({ ...prev, open: false }));
      },
    });
  };

  return (
    <div style={{ backgroundImage: `url(${bgImage})` }}  className={`bg-cover bg-[length:50%]`}>

      {/* left aligned the logo to keep consistency  */}
      <div className="fixed top-0 w-full z-10">
        <TopBar onPage={'projectSelection'}/>
      </div>

      <div className="px-10 pt-8 mt-16">
        <div className="flex  justify-between px-12 pb-4 style={{ flexGrow: 1 }}">
          <div>
            <button
              className={`${
                selectedTab === "projects"
                  ? "bg-blue-400 text-white border-2 border-black"
                  : "bg-gray-200 text-gray-700"
              } px-10 py-2 text-2xl rounded-l-lg focus:outline-none `}
              onClick={() => handleTabChange("projects")}
            >
              Projects
            </button>
            <button
              className={`${
                selectedTab === "lesson"
                  ? "bg-blue-400 text-white border-2 border-black"
                  : "bg-gray-200 text-gray-700"
              } px-10 py-2 text-2xl rounded-r-lg focus:outline-none`}
              onClick={() => handleTabChange("lesson")}
            >
              Lessons
            </button>
          </div>
          <div className="flex gap-4 justify-end">
            <AwesomeButton
              style={{
                "--button-primary-color": "#E35335",
                "--button-primary-color-dark": "#8B4000",
                "--button-primary-color-light": "#ffffff",
                "--button-primary-color-hover": "#E35335",
                "--button-primary-color-active": "#FF4433",
                "--button-default-border-radius": "8px",
                width: "145px",
                height: "50px",
                //marginRight: '10px',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onPress={() => setOpen(true)}
              className="h-12 flex gap-3 justify-center items-center"
              type="primary"
            >
              <PlusIcon className="h-6 w-6" /> New Project
            </AwesomeButton>

            <AwesomeButton
              style={{
                "--button-primary-color": "#33cc33",
                "--button-primary-color-dark": "#18a418",
                "--button-primary-color-light": "#ffffff",
                "--button-primary-color-hover": "#33cc33",
                "--button-primary-color-active": "#1aa81a",
                "--button-default-border-radius": "8px",
                width: "155px",
                height: "50px",
                //marginRight: '10px',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onPress={() => setNewLessonOpen(true)}
              className="h-12 flex gap-3 justify-center items-center"
              type="primary"
            >
              <PlusIcon className="h-6 w-6" /> Create Lesson
            </AwesomeButton>

          </div>
        </div>

        {selectedTab == "projects" && (
          <div style={{ marginTop: '20px' }}>
            <div className="flex justify-between px-12 pb-4">
              <Typography className="text-3xl">My Projects</Typography>
            </div>
              <div className="flex flex-row flex-wrap px-10 pt-4 gap-10">
                {projectData.map((project: any) => (
                  <ProjectCard
                    key={project.id}
                    {...project}
                    onDelete={deleteProject}
                  />
                ))}
              </div>
          
          </div>
        )}

        {selectedTab == "lesson" && (
          <div style={{ marginTop: '20px' }}>
            <div className="flex justify-between px-12 pb-4">
              <Typography className="text-3xl">My Lessons</Typography>
            </div>
            <div className="flex flex-row flex-wrap px-10 pt-4 gap-10">
              {lessonData.map((project: any) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                  onDelete={_deleteLesson}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-10 bg-blue-600 p-8 flex justify-center">
        <p className="text-center text-white">
        © WebBlockCraft, 2024. All rights reserved.
        </p>
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
      <ConfirmDialog {...openDialog} />
      {showScroll && (
        <div
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            cursor: "pointer",
            backgroundColor: "black",
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
