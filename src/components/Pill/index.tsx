export interface PillProps {
  children: JSX.Element | readonly JSX.Element[];
}

export default function Pill(props: PillProps): JSX.Element {
  return (
    <div className="p-2.5 w-fit flex flex-row space-x-2 rounded-full justify-center items-center shadow">
      {props.children}
    </div>
  );
}
