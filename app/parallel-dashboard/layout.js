export default function ParallelDashBoardLayout({
  children,
  assignments,
  notifications,
  quizzes,
}) {
  return (
    <>
      {children}
      <div className="grid grid-cols-2 grid-rows-3 gap-6 p-5  bg-amber-50">
        {assignments}
        {notifications}
        {quizzes}
      </div>
    </>
  );
}
