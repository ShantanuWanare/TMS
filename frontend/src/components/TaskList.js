import React from 'react';
import '../css/TaskList.css';

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div className="task" key={index}>
          <div className="task-details">
            <div className="row">
              <div className="col-sm-12">
                <div className="mb-3">
                  <h3> {task.task_name}</h3>
                  {/* <p>{task.task_name}</p> */}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="mb-3">
                  <p>{task.description}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="mb-3">
                  <strong>Client Name</strong>
                  <p>{task.client_name}</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mb-3">
                  <strong>Action Owner</strong>
                  <p>{task.action_ower}</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mb-3">
                  <strong>Status</strong>
                  <p>{task.status}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="mb-3">
                  <strong>Created Date</strong>
                  <p>{task.created_date}</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mb-3">
                  <strong>Due Date</strong>
                  <p>{task.due_date}</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mb-3">
                  <strong>Close Date</strong>
                  <p>{task.close_date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
