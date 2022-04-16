export const TimelineItem = ({ lineItem }) => {
   const { fecha, desc, institucion } = lineItem;
   return (
      <div className='timeline-item'>
         <span className='date'>{fecha}</span>
         <h4>{institucion}</h4>
         <p>{desc}</p>
      </div>
   );
};
