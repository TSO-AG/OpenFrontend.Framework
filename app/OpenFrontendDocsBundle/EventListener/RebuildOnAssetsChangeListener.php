<?php

namespace OpenFrontendDocsBundle\EventListener;

use Sculpin\Core\Event\SourceSetEvent;
use Sculpin\Core\Sculpin;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class RebuildOnAssetsChangeListener implements EventSubscriberInterface
{
    public function beforeRun(SourceSetEvent $event): void
    {
        $needsAllUpdate = false;

        foreach ($event->updatedSources() as $source) {
            if (str_starts_with($source->relativePathname(), 'assets/')) {
                $needsAllUpdate = true;
                break;
            }
        }

        if (!$needsAllUpdate) {
            return;
        }

        foreach ($event->allSources() as $source) {
            $source->setHasChanged();
        }
    }

    public static function getSubscribedEvents()
    {
        return [
            Sculpin::EVENT_BEFORE_RUN => 'beforeRun',
        ];
    }
}