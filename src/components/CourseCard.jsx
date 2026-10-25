import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function CourseCard({ title, description, image, mentor, job, avatar, rating, reviews, price }) {
  return (
    <article className="flex flex-col justify-between gap-4 rounded-lg border border-line bg-surface p-4 md:p-5">
      <div className="flex gap-3 md:flex-col md:gap-4">
        <img src={image} alt={`Thumbnail kelas ${title}`} className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-48 md:w-full" />

        <div className="flex min-w-0 flex-col gap-2">
          <h3 className="font-semibold md:text-lg">{title}</h3>
          <p className="hidden text-muted md:block">{description}</p>

          <div className="flex items-center gap-2">
            <img src={avatar} alt={`Foto ${mentor}`} className="h-9 w-9 rounded-lg object-cover md:h-10 md:w-10" />
            <div className="text-sm">
              <p className="font-medium">{mentor}</p>
              <p className="text-muted">{job}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-yellow">
          {[1, 2, 3, 4, 5].map((n) =>
            n <= rating ? <FaStar key={n} /> : n - 0.5 <= rating ? <FaStarHalfAlt key={n} /> : <FaRegStar key={n} />
          )}
          <span className="ml-1 text-sm text-muted underline">
            {rating} ({reviews})
          </span>
        </div>
        <p className="font-heading text-lg font-semibold text-primary md:text-xl">{price}</p>
      </div>
    </article>
  );
}

export default CourseCard;
