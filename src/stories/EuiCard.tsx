import '@elastic/eui/dist/eui_theme_light.css';
import { EuiProvider, EuiCard } from '@elastic/eui';

type EuiCardExampleProps = {
  title: string;
  description: string;
  footer: string;
}
export const EuiCardExample:React.FC<EuiCardExampleProps> = ({
  title,
  description,
  footer,
}) => {
  return (
    <EuiProvider colorMode="light">
      <div style={{ maxWidth: 400 }}>
        <EuiCard
          title={title}
          description={description}
          footer={footer}
        />
      </div>
    </EuiProvider>
  )
}
