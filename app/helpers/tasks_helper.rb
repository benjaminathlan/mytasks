module TasksHelper
  
  def css task
    "class='task #{(task.nil? ? @task : task).complete? ? "task_done" : ""}'"
  end
  
  def picto task
     "class='task #{(task.nil? ? @task : task).complete? ? "task_done" : ""}'"
   end
end
