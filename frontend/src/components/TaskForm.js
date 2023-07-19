import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

const TaskForm = ({ onSave }) => {
  const [modal, setModal] = useState(false);
  const [taskData, setTaskData] = useState({
    task_name: '',
    description: '',
    client_name: '',
    action_ower: '',
    status: 'open',
    created_date: '',
    due_date: '',
    close_date: '',
  });

  const toggleModal = () => setModal(!modal);

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedData = {
      ...taskData,
      created_date: taskData.created_date ? new Date(taskData.created_date).toISOString() : '',
      due_date: taskData.due_date ? new Date(taskData.due_date).toISOString() : '',
      close_date: taskData.close_date ? new Date(taskData.close_date).toISOString() : '',
    };
    onSave(formattedData);
    toggleModal();
    resetForm();
  };
  const resetForm = () => {
    setTaskData({
      task_name: '',
      description: '',
      client_name: '',
      action_ower: '',
      status: 'open',
      created_date: '',
      due_date: '',
      close_date: '',
    });
  };

  return (
    <div>
      <Button color="primary" onClick={toggleModal}>Add Task</Button>
      <Modal isOpen={modal} toggle={toggleModal} size='xl' >
        {/* <ModalHeader toggle={toggleModal}>Add Task</ModalHeader> */}
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <div className="row">
              <div className="col-sm-6">
                <FormGroup>
                  <Label for="task_name" className="fst-italic">Task Name:</Label>
                  <Input
                    type="text"
                    name="task_name"
                    id="task_name"
                    value={taskData.task_name}
                    onChange={handleChange}
                    className="form-control border-dark"
                  />
                </FormGroup>
              </div>
              <div className="col-sm-6">
                <FormGroup>
                  <Label for="client_name" className="fst-italic">Client Name:</Label>
                  <Input
                    type="text"
                    name="client_name"
                    id="client_name"
                    value={taskData.client_name}
                    onChange={handleChange}
                    className="form-control border-dark"
                
                  />
                </FormGroup>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <FormGroup>
                  <Label for="action_ower" className="fst-italic">Action Owner:</Label>
                  <Input
                    type="text"
                    name="action_ower"
                    id="action_ower"
                    value={taskData.action_ower}
                    onChange={handleChange}
                    className="form-control border-dark"
                  />
                </FormGroup>
              </div>
              <div className="col-sm-6">
                <FormGroup>
                  <Label for="status" className="fst-italic">Status:</Label>
                  <Input
                    type="select"
                    name="status"
                    id="status"
                    value={taskData.status}
                    onChange={handleChange}
                    className="form-control border-dark"
                  >
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                  </Input>
                </FormGroup>
              </div>
            </div>
            <FormGroup>
              <Label for="description" className="fst-italic">Description:</Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                value={taskData.description}
                onChange={handleChange}
                className="form-control border-dark"
              />
            </FormGroup>
            <div className="row">
              <div className="col-sm-4">
                <FormGroup>
                  <Label for="created_date" className="fst-italic">Created Date:</Label>
                  <Input
                    type="date"
                    name="created_date"
                    id="created_date"
                    value={taskData.created_date}
                    onChange={handleChange}
                    className="form-control border-dark"
                  />
                </FormGroup>
              </div>
              <div className="col-sm-4">
                <FormGroup>
                  <Label for="due_date" className="fst-italic">Due Date:</Label>
                  <Input
                    type="date"
                    name="due_date"
                    id="due_date"
                    value={taskData.due_date}
                    onChange={handleChange}
                    className="form-control border-dark"
                  />
                </FormGroup>
              </div>
              <div className="col-sm-4">
                <FormGroup>
                  <Label for="close_date" className="fst-italic">Close Date:</Label>
                  <Input
                    type="date"
                    name="close_date"
                    id="close_date"
                    value={taskData.close_date}
                    onChange={handleChange}
                    className="form-control border-dark"
                  />
                </FormGroup>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">Save</Button>
            <Button color="secondary" onClick={toggleModal}>Cancel</Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
};

export default TaskForm;
