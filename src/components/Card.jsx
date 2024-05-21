
export default function Card({title,image,description}){
    return(
        <div className="card  card-bordered shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out max-w-sm">
        <figure className="overflow-hidden">
          <img src={image} alt={title} className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
}