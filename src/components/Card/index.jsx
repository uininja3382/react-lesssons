const Card = ({ user, post }) => {
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
        <span className="text-sm text-slate-600 font-semibold">
          {user?.name}
        </span>
      </div>

      <div className="p-4">
        <h5 className="mb-2 text-slate-800 text-xl font-semibold">
          {user.email}
        </h5>
        <p className="text-slate-600 leading-normal font-light">
          {post?.title}
        </p>
      </div>
      <div className="mx-3 border-t border-slate-200 pb-3 pt-2 px-1">
        <span className="text-sm text-slate-600 font-medium">
          {user?.company?.name}
        </span>
      </div>
    </div>
  );
};

export default Card;
