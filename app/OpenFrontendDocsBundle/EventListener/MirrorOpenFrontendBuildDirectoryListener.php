<?php

namespace OpenFrontendDocsBundle\EventListener;

use Sculpin\Core\Event\SourceSetEvent;
use Sculpin\Core\Sculpin;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Filesystem\Filesystem;

class MirrorOpenFrontendBuildDirectoryListener implements EventSubscriberInterface
{
    private bool $didRun = false;

    public function __construct(private string $buildDir, private string $assetPath, private string $outputDir)
    {

    }

    public static function getSubscribedEvents(): array
{
    return [
        Sculpin::EVENT_AFTER_RUN => 'mirrorBuildDirectory',
    ];
}

    public function mirrorBuildDirectory(SourceSetEvent $event): void
    {
        if ($this->didRun) {
            return;
        }

        (new Filesystem())->mirror($this->buildDir, $this->outputDir . '/' . $this->assetPath);

        $this->didRun = true;
    }
}