// ActionsPanel.tsx
import React from 'react';

interface ActionsPanelProps {
  title?: string;
  children?: React.ReactNode;
}

const ActionsPanel: React.FC<ActionsPanelProps> = ({
  title = 'actions:',
  children,
}) => {
  return (
    <div className="flex-col space-y-4">
      <div className="text-lg">{title}</div>
      <div>{children || 'put actions here'}</div>
    </div>
  );
};

export default ActionsPanel;
