import React, { useState, Fragment } from 'react';

const HIDE_TRANSITION_TIME = 200;

const SidePanelContext = React.createContext({
    showSidePanel: () => {},
    hideSidePanel: () => {},
});

export const SidePanelProvider = SidePanelContext.Provider;

export const SidePanelConsumer = SidePanelContext.Consumer;

let currentSidePanelId = 1;

const SidePanelItem = ({
  id,
  body,
  className,
  closeButtonClassName = "",
  hasCloseButton = false,
  onClose,
  open,
}) => {
  return (
    <Fragment>
        <div className={`side-panel ${className}`} key={id}>
            {body}
            {hasCloseButton && (
                <div className={closeButtonClassName || "side-panel__close-btn"}>
                    <button aria-label="close" onClick={() => onClose(id)}>
                        Close
                    </button>
                </div>
            )}
        </div>
        <div
            className="side-panel__backdrop"
            onClick={() => onClose(id)}
            open={open}
        />
    </Fragment>
  );
};

const SidePanelPlaceholder = ({ sidePanels, onClose, id }) => {
    return (sidePanels || []).map((sidePanelProps) => (
        <SidePanelItem {...sidePanelProps} onClose={onClose} key={id}/>
    ));
};

export const AppWithSidePanel = ({ children }) => {
    const [sidePanels, setSidePanels] = useState([]);

    const removeSidePanel = (sidePanelId) => {
        if (!sidePanelId) {
            throw new Error('Id should be provided for side panel');
        }

        setSidePanels((currentSidePanels) => (currentSidePanels || []).filter(({ id }) => id !== sidePanelId));
    };

    const hideSidePanel = (sidePanelId) => {
        setSidePanels((currentSidePanels) => {
            const index = (currentSidePanels || []).findIndex(({ id }) => id === sidePanelId);

            if (index > -1) {
                return ((currentSidePanels || []).map((currentSidePanel) => {
                    if (currentSidePanel.id === sidePanelId) {
                        return {
                            ...currentSidePanel,
                            open: false,
                        };
                    }

                    return currentSidePanel;
                }));
            }

            return currentSidePanels;
        });

        setTimeout(() => removeSidePanel(sidePanelId), HIDE_TRANSITION_TIME);
    };

    const showSidePanel = (sidePanel) => {
        // eslint-disable-next-line no-plusplus
        const id = currentSidePanelId++;

        setSidePanels([...sidePanels, { ...sidePanel, open: true, id }]);

        return id;
    };

    return (
        <SidePanelProvider value={{
            showSidePanel,
            hideSidePanel,
        }}>
            <SidePanelPlaceholder
                sidePanels={sidePanels}
                onClose={(id) => hideSidePanel(id)}
            />
            {children}
        </SidePanelProvider>
    );
};

export default SidePanelContext;
