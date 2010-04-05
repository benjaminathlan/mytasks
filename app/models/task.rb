class Task < ActiveRecord::Base
  def task_complete?
    complete?
  end
end
