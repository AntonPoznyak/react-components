import {
  PencilIcon,
  TrashIcon,
  HeartIcon,
  ShareIcon,
  ArrowPathIcon,
  BellIcon,
  BookmarkIcon,
  EllipsisHorizontalIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import Button from './components/Button'
import IconButton from './components/IconButton'

function App() {
  const iconClasses = 'w-4 h-4' // 16px

  return (
    <div className="p-8 space-y-12 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold mb-8">Buttons Demo</h1>
        
        {/* Regular Buttons */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Regular Buttons</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="CTA">CTA Button</Button>
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="danger">Danger Button</Button>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Disabled Buttons</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="CTA" disabled>CTA Button</Button>
              <Button variant="primary" disabled>Primary Button</Button>
              <Button variant="secondary" disabled>Secondary Button</Button>
              <Button variant="ghost" disabled>Ghost Button</Button>
              <Button variant="danger" disabled>Danger Button</Button>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Link Buttons</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <Button 
                variant="CTA" 
                href="#" 
                icon={<ArrowRightIcon className={iconClasses} />}
                iconPosition="right"
              >
                CTA Link
              </Button>
              <Button 
                variant="primary" 
                href="#" 
                icon={<ArrowRightIcon className={iconClasses} />}
                iconPosition="right"
              >
                Primary Link
              </Button>
              <Button 
                variant="secondary" 
                href="#" 
                icon={<ArrowRightIcon className={iconClasses} />}
                iconPosition="right"
              >
                Secondary Link
              </Button>
              <Button 
                variant="ghost" 
                href="#" 
                icon={<ArrowRightIcon className={iconClasses} />}
                iconPosition="right"
              >
                Ghost Link
              </Button>
              <Button 
                variant="danger" 
                href="#" 
                icon={<ArrowRightIcon className={iconClasses} />}
                iconPosition="right"
              >
                Danger Link
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Icon Buttons */}
      <div className="space-y-8">
        <h1 className="text-2xl font-bold mb-8">Icon Buttons Demo</h1>

        <div>
          <h2 className="text-lg font-semibold mb-4">Primary Icon Buttons</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <IconButton
              icon={<PencilIcon className={iconClasses} />}
              variant="primary"
              onClick={() => {}}
              title="Edit"
            />
            <IconButton
              icon={<ShareIcon className={iconClasses} />}
              variant="primary"
              onClick={() => {}}
              title="Share"
            />
            <IconButton
              icon={<HeartIcon className={iconClasses} />}
              variant="primary"
              onClick={() => {}}
              title="Like"
            />
            <IconButton
              icon={<BellIcon className={iconClasses} />}
              variant="primary"
              onClick={() => {}}
              title="Notifications"
              disabled
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Secondary Icon Buttons</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <IconButton
              icon={<BookmarkIcon className={iconClasses} />}
              variant="secondary"
              onClick={() => {}}
              title="Bookmark"
            />
            <IconButton
              icon={<ArrowPathIcon className={iconClasses} />}
              variant="secondary"
              onClick={() => {}}
              title="Refresh"
            />
            <IconButton
              icon={<EllipsisHorizontalIcon className={iconClasses} />}
              variant="secondary"
              onClick={() => {}}
              title="More options"
            />
            <IconButton
              icon={<ShareIcon className={iconClasses} />}
              variant="secondary"
              onClick={() => {}}
              title="Share"
              disabled
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Ghost Icon Buttons</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <IconButton
              icon={<PencilIcon className={iconClasses} />}
              variant="ghost"
              onClick={() => {}}
              title="Edit"
            />
            <IconButton
              icon={<BookmarkIcon className={iconClasses} />}
              variant="ghost"
              onClick={() => {}}
              title="Bookmark"
            />
            <IconButton
              icon={<HeartIcon className={iconClasses} />}
              variant="ghost"
              onClick={() => {}}
              title="Like"
            />
            <IconButton
              icon={<BellIcon className={iconClasses} />}
              variant="ghost"
              onClick={() => {}}
              title="Notifications"
              disabled
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Danger Icon Buttons</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <IconButton
              icon={<TrashIcon className={iconClasses} />}
              variant="danger"
              onClick={() => {}}
              title="Delete"
            />
            <IconButton
              icon={<TrashIcon className={iconClasses} />}
              variant="danger"
              onClick={() => {}}
              title="Delete"
              disabled
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Link Icon Buttons</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <IconButton
              icon={<ShareIcon className={iconClasses} />}
              variant="primary"
              href="#"
              title="Share link"
            />
            <IconButton
              icon={<ArrowPathIcon className={iconClasses} />}
              variant="secondary"
              href="#"
              title="Refresh link"
            />
            <IconButton
              icon={<BookmarkIcon className={iconClasses} />}
              variant="ghost"
              href="#"
              title="Bookmark link"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
