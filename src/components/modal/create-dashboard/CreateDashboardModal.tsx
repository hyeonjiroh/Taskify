"use client";

import Modal from "@/components/common/modal/Modal";

export default function CreateDashboardModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <Modal>
      <button onClick={onClose}>x</button>
      <div>Modal Content</div>
    </Modal>
  );
}
