interface UserProfileProps {
  name: string;
  age: number;
  isActive: boolean;
}

const UserProfile = ({ name, age, isActive }: UserProfileProps) => {
  let ageEmoji = '';
  if (age < 18) {
    ageEmoji = '👶';
  } else if (age < 40) {
    ageEmoji = '🧑';
  } else {
    ageEmoji = '👴';
  }

  return (
    <div className={`p-3 ${isActive ? 'bg-green-200' : 'bg-red-200'}`}>
      <h1 className="text-lg font-bold">{name}</h1>
      <p>Age: {age} {ageEmoji}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
};

export default UserProfile;
