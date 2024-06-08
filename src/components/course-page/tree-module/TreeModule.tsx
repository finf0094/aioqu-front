import { Tree, TreeNode } from "react-organizational-chart";
import { ModuleCard } from "@/components/ui/module-card/ModuleCard";
import { useEffect, useState } from "react";

export interface Module {
  id: number;
  name: string;
  progress: number;
  children?: Module[];
}

export type ModuleList = Module[];

const modulesList = [
  {
    id: 1,
    name: "Korem",
    progress: 100,
    children: [
      {
        id: 2,
        name: "Korem",
        progress: 40,
        children: [
          {
            id: 3,
            name: "Borem",
            progress: 40,
          },
        ],
      },
      {
        id: 4,
        name: "Korem",
        progress: 40,
        children: [
          {
            id: 5,
            name: "Korem",
            progress: 40,
          },
        ],
      },
    ],
  },
];

export const TreeModule: React.FC = () => {
  const [modules, setModules] = useState<ModuleList>([]);

  useEffect(() => {
    setModules(modulesList);
  }, []);

  const renderTree = (module: Module) => (
    <TreeNode
      key={module.id}
      label={<ModuleCard progress={module.progress}>{module.name}</ModuleCard>}
    >
      {module.children && module.children.map((child) => renderTree(child))}
    </TreeNode>
  );

  return (
    modules.length > 0 && (
      <Tree
        lineWidth={"2px"}
        lineColor={"#1468FE"}
        lineBorderRadius={"10px"}
        label={
          <ModuleCard progress={modules[0].progress}>
            {modules[0].name}
          </ModuleCard>
        }
      >
        {modules[0].children &&
          modules[0].children.map((child) => renderTree(child))}
      </Tree>
    )
  );
};

// export const TreeModule = () => (
//   <Tree
//     lineWidth={"2px"}
//     lineColor={"#1468FE"}
//     lineBorderRadius={"10px"}
//     label={<ModuleCard progress={100}>Korem</ModuleCard>}
//   >
//     <TreeNode label={<ModuleCard progress={40}>Korem</ModuleCard>} />
//     <TreeNode label={<ModuleCard progress={40}>Korem</ModuleCard>}>
//       <TreeNode label={<ModuleCard progress={40}>Borem</ModuleCard>} />
//     </TreeNode>
//     <TreeNode label={<ModuleCard progress={40}>Korem</ModuleCard>}>
//       <TreeNode label={<ModuleCard progress={40}>Korem</ModuleCard>} />
//     </TreeNode>
//   </Tree>
// );
