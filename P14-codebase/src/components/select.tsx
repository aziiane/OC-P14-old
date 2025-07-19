import { Select } from "@base-ui-components/react/select";
import styles from "../styles/select.module.css";
import { CheckIcon, ChevronUpDownIcon } from "../assets/icons";

export default function Selector({
  content,
  name,
}: {
  content: { label: string; value: string }[];
  name?: string;
}) {
  return (
    <Select.Root name={name}>
      <Select.Trigger className={styles.Select}>
        <Select.Value />
        <Select.Icon className={styles.SelectIcon}>
          <ChevronUpDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner className={styles.Positioner} sideOffset={8}>
          <Select.ScrollUpArrow className={styles.ScrollArrow} />
          <Select.Popup className={styles.Popup}>
            {content.map(({ label, value }) => (
              <Select.Item key={label} value={value} className={styles.Item}>
                <Select.ItemIndicator className={styles.ItemIndicator}>
                  <CheckIcon className={styles.ItemIndicatorIcon} />
                </Select.ItemIndicator>
                <Select.ItemText className={styles.ItemText}>
                  {label}
                </Select.ItemText>
              </Select.Item>
            ))}
          </Select.Popup>
          <Select.ScrollDownArrow className={styles.ScrollArrow} />
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}
