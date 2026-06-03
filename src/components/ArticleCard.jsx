import { memo } from 'react';
import { Clock } from 'lucide-react';

const ArticleCard = memo(({ article }) => {
  const { title, excerpt, date, readTime, category, image } = article;

  return (
    <article 
      className="group cursor-pointer flex flex-col gap-5 bg-white rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] border border-gray-100/50 h-full"
    >
      {/* Image Container */}
      <div className="aspect-[4/3] rounded-xl overflow-hidden relative bg-gray-100">
        <img 
          alt={title} 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
          src={image}
        />
        {/* Category Overlay */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full font-['Hanken_Grotesk'] text-[11px] font-semibold uppercase tracking-wider text-gray-900 border border-gray-200/20">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-1 pb-2">
        {/* Meta */}
        <div className="flex items-center gap-2 text-gray-500 text-[12px] font-medium mb-3">
          <span>{date}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {readTime}
          </span>
        </div>

        {/* Title */}
        <h4 className="font-['Hanken_Grotesk'] text-[22px] font-medium leading-tight text-gray-900 mb-3 group-hover:text-[#F26522] transition-colors duration-300">
          {title}
        </h4>

        {/* Excerpt */}
        <p className="text-gray-600 text-[14px] leading-[1.5] line-clamp-2">
          {excerpt}
        </p>
      </div>
    </article>
  );
});

ArticleCard.displayName = 'ArticleCard';

export default ArticleCard;
