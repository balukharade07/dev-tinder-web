export const Avatar = ({ name, isCard = false,isOwn = false, avatarBgColor = '' }) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
if(isCard) {
    return  <span className=''>{initials}</span>
}
  return (
    <div className='avatar placeholder'>
      <div className={`${avatarBgColor} ${isOwn ? 'bg-secondary' : 'bg-primary'}  text-primary-content rounded-full w-8 h-8 flex items-center justify-center`}>
        <span className='text-xs font-semibold'>{initials}</span>
      </div>
    </div>
  );
};
